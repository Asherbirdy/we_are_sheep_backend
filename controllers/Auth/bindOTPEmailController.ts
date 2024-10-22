import { Role, StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'
import { attachCookieToResponse, createTokenUser } from '../../utils'

export const bindOTPEmailController = async (req: Req, res: Res) => {
  const OTP = req.body.OTP

  const user = await User.findById(req.user?.userId)

  if (!user) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: 'User not found' })
    return
  }

  // Check if user account is blocked
  if (user.isBlocked) {
    const currentTime = new Date()
    if (currentTime < user.blockUntil) {
      res.status(StatusCodes.FORBIDDEN).send('Account blocked. Try after some time.')
      return
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

    res.status(StatusCodes.FORBIDDEN).json({ msg: 'Invalid OTP' })
    return
  }

  // Check if OTP is within 5 minutes
  const OTPCreatedTime = user.OTPCreatedTime
  if (!OTPCreatedTime) {
    res.status(StatusCodes.FORBIDDEN).send('OTP not found or expired')
    return
  }
  const currentTime = new Date()
  const timeDifference = currentTime.getTime() - OTPCreatedTime.getTime()

  if (timeDifference > 5 * 60 * 1000) {
    res.status(StatusCodes.FORBIDDEN).send('OTP expired')
    return
  }

  // Clear OTP
  user.OTP = undefined
  user.OTPCreatedTime = undefined
  user.OTPAttempts = 0
  user.emailVerified = true

  await user.save()
  res.status(StatusCodes.OK).json({ msg: 'bindOTPEmail' })
  
}