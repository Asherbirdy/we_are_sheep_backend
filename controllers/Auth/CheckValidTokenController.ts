import { Req, Res } from '../../types'
import { StatusCodes } from '../../enums'

export const CheckValidTokenController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Token is valid',
    status: true
  })
}