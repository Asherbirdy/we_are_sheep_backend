import { Request, Response } from 'express'
import { Role, StatusCodes } from '../enums'
import User from '../models/User'
import Token from '../models/Token'
import { createTokenUser, attachCookieToResponse, isTokenValid } from '../utils'
import crypto from 'crypto'
import { Req, Res } from '../types'
import { UserSerialNumber } from '../models/UserSerialNumber'
import { generateOTP, sendOTP } from '../utils/emailService'
import jwt from 'jsonwebtoken'
import config from '../config'
export const AuthController = {
  // ** register
  register: async (req: Request, res: Response) => {
    const { name, email, password } = req.body
  
    const emailAlreadyExist = await User.findOne({ email })
    if (emailAlreadyExist) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: `${ email } 已經被使用！` })
      return
    }

    const isFirstAccount = (await User.countDocuments({})) === 0
    if(!isFirstAccount) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: '已經有開發者帳號！' })
      return
    }
    const role: Role = isFirstAccount ? Role.dev : Role.user
    const user = await User.create({ name, email, password, role })
    
    const tokenUser = createTokenUser(user)
    
    attachCookieToResponse({ res, user: tokenUser })
    res.status(StatusCodes.CREATED).json({ user: tokenUser })
  },
  // ** userRegister
  userRegister: async (req: Req, res: Res) => {
    const { name, email, password, serialNumber } = req.body

    if(!name || !email || !password || !serialNumber) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: '請提供完整資訊！ name, email, password, serialNumber '
      })
      return
    }

    const userSerialNumber = await UserSerialNumber.findOne({ serialNumber })

    if(!userSerialNumber) {
      res.status(StatusCodes.NOT_FOUND).json({
        errorCode: 'USER_SERIAL_NUMBER_NOT_FOUND',
        msg: 'User serial number not found'
      })
      return
    }

    if(userSerialNumber.isUsed) {
      res.status(StatusCodes.BAD_REQUEST).json({
        errorCode: 'USER_SERIAL_NUMBER_ALREADY_USED',
        msg: 'User serial number is already used'
      })
      return
    }

    const emailAlreadyExist = await User.findOne({ email })

    if (emailAlreadyExist) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: `${ email } 已經被使用！` })
      return
    }

    const user = await User.create({
      name,
      email,
      password,
      role: userSerialNumber.role,
      district: userSerialNumber.districtId
    })
    
    const tokenUser = createTokenUser(user)
    
    attachCookieToResponse({ res, user: tokenUser })

    userSerialNumber.isUsed = true
    await userSerialNumber.save()

    res.status(StatusCodes.CREATED).json({ tokenUser })
  },
  // ** login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: '請提供帳號和密碼！' })
      return
    }
    const user = await User.findOne({ email })

    if (!user) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: '錯誤帳號密碼' })
      return
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: '錯誤帳號密碼' })
      return
    }

    const tokenUser = createTokenUser(user)
    let refreshToken = ''
    const existingToken = await Token.findOne({ user: user._id })
    if (existingToken) {
      const { isValid } = existingToken
      if (!isValid) {
        res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Invalid Credentials' })
        return
      }

      refreshToken = existingToken.refreshToken
      const token = attachCookieToResponse({ res, user: tokenUser, refreshToken })
      res.status(StatusCodes.OK).json({ user: tokenUser, token })
      return
    }
    refreshToken = crypto.randomBytes(40).toString('hex')
    const userAgent = req.headers[ 'user-agent' ]
    const ip = req.ip
    const userToken = { refreshToken, ip, userAgent, user: user._id }

    await Token.create(userToken)
    const token = attachCookieToResponse({ res, user: tokenUser, refreshToken })

    res.status(StatusCodes.OK).json({ user: tokenUser, token })
  },

  // ** logout
  logout: async (req: Req, res: Response) => {
    if (!req.user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'User not authenticated' })
    }
    
    await Token.findOneAndDelete({ user: req.user.userId })

    res.cookie('accessToken', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    })

    res.cookie('refreshToken', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    })

    res.status(StatusCodes.OK).json({ msg: 'user logged out!' })
  },
  // ** refreshToken
  refreshToken: async (req: Req, res: Response) => {
    let jwtrefreshToken = null
    const authHeader = req.headers[ 'authorization' ]
    if (authHeader) {
      jwtrefreshToken = authHeader.split(' ')[ 1 ]
    }
    interface UserPayload {
      user: {
        name: string;
        userId: string;
        role: string;
      };
      refreshToken?: string;
    }
    const payload = isTokenValid(jwtrefreshToken) as UserPayload
    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    })
    const token = attachCookieToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken?.refreshToken,
    })
  
    res.status(StatusCodes.OK).json({
      msg: 'refreshToken',
      jwtAccessToken: token,
    })
  },
  sendOTP: async (req: Req, res: Res) => {

    try {
      const user = await User.findById(req.user?.userId)

      if (!user) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: 'User not found' })
        return
      }

      // If user is blocked, return an error
      if (user.isBlocked) {
        const currentTime = new Date()
        if (currentTime < user.blockUntil) {
          return res.status(403).send('Account blocked. Try after some time.')
        } else {
          user.isBlocked = false
          user.OTPAttempts = 0
        }
      }
  
      // Check for minimum 1-minute gap between OTP requests
      const lastOTPTime = user.OTPCreatedTime
      const currentTime = new Date()
  
      if (lastOTPTime && currentTime.getTime() - lastOTPTime.getTime() < 60000) {
        return res.status(StatusCodes.BAD_REQUEST).send('Minimum 1-minute gap required between OTP requests')
      }
  
      const OTP = generateOTP()
      user.OTP = OTP
      user.OTPCreatedTime = currentTime
  
      await user.save()
  
      sendOTP(user.email, OTP)
  
      res.status(StatusCodes.OK).send('OTP sent successfully')
    } catch (err) {
      res.status(500).send('Server error')
    }
    res.status(StatusCodes.OK).json({ msg: 'sendOTP' })
  },
  bindOTPEmail: async (req: Req, res: Res) => {
    const email = req.body.email
    const OTP = req.body.OTP
    try {
      const user = await User.findOne({ email: email })
  
      if (!user) {
        return res.status(404).send('User not found')
      }
  
      // Check if user account is blocked
      if (user.isBlocked) {
        const currentTime = new Date()
        if (currentTime < user.blockUntil) {
          return res.status(403).send('Account blocked. Try after some time.')
        } else {
          user.isBlocked = false
          user.OTPAttempts = 0
        }
      }
  
      // Check OTP
      if (user.OTP !== OTP) {
        user.OTPAttempts++
  
        // If OTP attempts >= 5, block user for 1 hour
        if (user.OTPAttempts >= 5) {
          user.isBlocked = true
          const blockUntil = new Date()
          blockUntil.setHours(blockUntil.getHours() + 1)
          user.blockUntil = blockUntil
        }
  
        await user.save()
  
        return res.status(403).send('Invalid OTP')
      }
  
      // Check if OTP is within 5 minutes
      const OTPCreatedTime = user.OTPCreatedTime
      if (!OTPCreatedTime) {
        return res.status(403).send('OTP not found or expired')
      }
      const currentTime = new Date()
      const timeDifference = currentTime.getTime() - OTPCreatedTime.getTime()
  
      if (timeDifference > 5 * 60 * 1000) {
        return res.status(403).send('OTP expired')
      }
  
      // Generate JWT
      const token = jwt.sign({ email: user.email }, config.jwt_secret as string, {
        expiresIn: '1h',
      })
  
      // Clear OTP
      user.OTP = undefined
      user.OTPCreatedTime = undefined
      user.OTPAttempts = 0
      user.emailVerified = true
  
      await user.save()
      res.status(StatusCodes.OK).json({ msg: 'bindOTPEmail', token })
    } catch (err) {
      res.status(500).send('Server error')
    }
  }
}
