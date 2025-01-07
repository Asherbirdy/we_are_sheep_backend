import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteFriendController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'DeleteFriendController_GET_SUCCESS',
  })
}
