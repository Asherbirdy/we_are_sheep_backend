import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CheckChangePasswordOTPisValidController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({ msg: 'Check Change Password OTP is Valid' })
}
