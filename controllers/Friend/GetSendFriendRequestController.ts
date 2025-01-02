import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import User from '../../models/User'
import { Req, Res } from '../../types'

// 取得發送中的好友請求
export const GetSendFriendRequestController = async (req: Req, res: Res) => {
  const findFriendRequest = await Friend.find({ 
    userId: req.user?.userId,
    status: 'pending' 
  })
  res.status(StatusCodes.OK).json({
    msg: 'GetSendFriendRequestController_GET_SUCCESS',
    data: findFriendRequest
  })
}
