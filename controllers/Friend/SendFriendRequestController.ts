import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const SendFriendRequestController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'SendFriendRequestController_POST_SUCCESS',
    data: {}
  })
}
