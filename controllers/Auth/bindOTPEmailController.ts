import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const bindOTPEmailController = async (req: Req, res: Res) => {
  const OTP = req.body.OTP

  const user = await User.findById(req.user?.userId)

  if (!user) {
    throw new BadRequestError('USER_NOT_FOUND')
  }

  // Check if user account is blocked
  if (user.isBlocked) {
    const currentTime = new Date()
    if (currentTime < user.blockUntil) {
      throw new BadRequestError('ACCOUNT_BLOCKED')
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

    throw new BadRequestError('INVALID_OTP')
  }

  // Check if OTP is within 5 minutes
  const OTPCreatedTime = user.OTPCreatedTime
  if (!OTPCreatedTime) {
    throw new BadRequestError('OTP_NOT_FOUND_OR_EXPIRED')
  }
  const currentTime = new Date()
  const timeDifference = currentTime.getTime() - OTPCreatedTime.getTime()

  if (timeDifference > 5 * 60 * 1000) {
    throw new BadRequestError('OTP_EXPIRED')
  }

  // Clear OTP
  user.OTP = undefined
  user.OTPCreatedTime = undefined
  user.OTPAttempts = 0
  user.emailVerified = true

  await user.save()
  res.status(StatusCodes.OK).json({ 
    msg: 'OTP binded'
  })
  
}