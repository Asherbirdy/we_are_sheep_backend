import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const ShowCurrentUserController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    user: req.user
  })
}