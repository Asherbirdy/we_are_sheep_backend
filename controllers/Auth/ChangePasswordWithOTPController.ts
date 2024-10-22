import { StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const ChangePasswordWithOTPController = async (req: Req, res: Res) => {
  const { email, OTP, newPassword } = req.body

  if (!email || !OTP || !newPassword) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: 'All fields are required' })
    return
  }
  
  const user = await User.findOne({ email: email })
  if (!user) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: 'User not found' })
    return
  }

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
  const currentTime = new Date()

  if (OTPCreatedTime && currentTime.getTime() - OTPCreatedTime.getTime() > 5 * 60 * 1000) {
    return res.status(403).send('OTP expired')
  }
  
  // Clear OTP
  user.OTP = undefined
  user.OTPCreatedTime = undefined
  user.OTPAttempts = 0

  // Update user's password here
  user.password = newPassword
  await user.save()
  
  res.status(StatusCodes.OK).json({ msg: 'Password changed successfully' })
}