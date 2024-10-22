import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const ChangePasswordWithOTPController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({ msg: 'Change Password With OTP' })
}