import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import { Req, Res } from '../../types'
export const FriendListController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'FriendListController_GET_SUCCESS',
  })
}
