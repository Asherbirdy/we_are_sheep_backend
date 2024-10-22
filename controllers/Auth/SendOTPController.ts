import { Role, StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'
import { attachCookieToResponse, createTokenUser, generateOTP, sendOTP } from '../../utils'

export const SendOTPController = async (req: Req, res: Res) => {

  const user = await User.findById(req.user?.userId)

  if (!user) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: 'User not found' })
    return
  }

  // If user is blocked, return an error
  if (user.isBlocked) {
    const currentTime = new Date()
    if (currentTime < user.blockUntil) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'Account blocked. Try after some time.' })
      return
    } else {
      user.isBlocked = false
      user.OTPAttempts = 0
    }
  }

  // Check for minimum 1-minute gap between OTP requests
  const lastOTPTime = user.OTPCreatedTime
  const currentTime = new Date()

  if (lastOTPTime && currentTime.getTime() - lastOTPTime.getTime() < 60000) {
    return res.status(StatusCodes.BAD_REQUEST).json({msg: 'Minimum 1-minute gap required between OTP requests'})
  }

  const OTP = generateOTP()
  user.OTP = OTP
  user.OTPCreatedTime = currentTime

  await user.save()

  sendOTP(user.email, OTP)

  res.status(StatusCodes.OK).json({ msg: 'OTP sent successfully' })
  
}
