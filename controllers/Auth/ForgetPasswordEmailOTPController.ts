import { StatusCodes } from '../../enums'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const ForgetPasswordEmailOTPController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({ msg: 'Forget Password Email OTP' })
}