import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const ChangeUserAccessController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'User access changed'
  })
}