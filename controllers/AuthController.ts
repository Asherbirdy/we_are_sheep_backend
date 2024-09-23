import { Request, Response } from 'express'
import { StatusCode } from '../enums'
import User from '../models/User'
import Token from '../models/Token'
import { createTokenUser, attachCookieToResponse } from '../utils'
import crypto from 'crypto'
import { Req } from '../types'
export const AuthController = {
  // ** register
  register: async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    const emailAlreadyExist = await User.findOne({ email })
    if (emailAlreadyExist) {
      res.status(StatusCode.BAD_REQUEST).json({ msg: `${ email } 已經被使用！` })
      return
    }

    const isFirstAccount = (await User.countDocuments({})) === 0
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role })
    
    const tokenUser = createTokenUser(user)
    
    attachCookieToResponse({ res, user: tokenUser })
    res.status(StatusCode.CREATED).json({ user: tokenUser })
  },

  // ** login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(StatusCode.BAD_REQUEST).json({ msg: '請提供帳號和密碼！' })
      return
    }
    const user = await User.findOne({ email })

    if (!user) {
      res.status(StatusCode.BAD_REQUEST).json({ msg: '錯誤帳號密碼' })
      return
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
      res.status(StatusCode.BAD_REQUEST).json({ msg: '錯誤帳號密碼' })
      return
    }

    const tokenUser = createTokenUser(user)
    let refreshToken = ''
    const existingToken = await Token.findOne({ user: user._id })
    if (existingToken) {
      const { isValid } = existingToken
      if (!isValid) {
        res.status(StatusCode.BAD_REQUEST).json({ msg: 'Invalid Credentials' })
        return
      }

      refreshToken = existingToken.refreshToken
      attachCookieToResponse({ res, user: tokenUser, refreshToken })
      res.status(StatusCode.OK).json({ user: tokenUser })
      return
    }
    refreshToken = crypto.randomBytes(40).toString('hex')
    const userAgent = req.headers[ 'user-agent' ]
    const ip = req.ip
    const userToken = { refreshToken, ip, userAgent, user: user._id }

    await Token.create(userToken)
    attachCookieToResponse({ res, user: tokenUser, refreshToken })

    res.status(StatusCode.OK).json({ user: tokenUser })
  },

  // ** logout
  logout: async (req: Req, res: Response) => {
    if (!req.user) {
      return res.status(StatusCode.UNAUTHORIZED).json({ msg: 'User not authenticated' })
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

    res.status(StatusCode.OK).json({ msg: 'user logged out!' })
  },
}
