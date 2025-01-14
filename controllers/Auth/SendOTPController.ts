import { StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'
import { generateOTP, sendOTP } from '../../utils'

export const SendOTPController = async (req: Req, res: Res) => {
  const user = await User.findById(req.user?.userId)

  if (!user) {
    res.status(StatusCodes.NOT_FOUND).json({ 
      errCode: 'USER_NOT_FOUND',
      msg: 'User not found'
    })
    return
  }

  // If user is blocked, return an error
  if (user.isBlocked) {
    const currentTime = new Date()
    if (currentTime < user.blockUntil) {
      res.status(StatusCodes.FORBIDDEN).json({ 
        errCode: 'ACCOUNT_BLOCKED',
        msg: 'Account blocked. Try after some time.'
      })
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
    res.status(StatusCodes.BAD_REQUEST).json({ 
      errCode: 'MINIMUM_1_MINUTE_GAP_REQUIRED',
      msg: 'Minimum 1-minute gap required between OTP requests'
    })
    return
  }

  const OTP = generateOTP()
  user.OTP = OTP
  user.OTPCreatedTime = currentTime

  await user.save()

  sendOTP(user.email, OTP)

  res.status(StatusCodes.OK).json({ 
    msg: 'OTP sent successfully'
  })
}
