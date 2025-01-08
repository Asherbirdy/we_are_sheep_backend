import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import { Req, Res } from '../../types'

// 取得你的好友請求
export const GetYourFriendRequestController = async (req: Req, res: Res) => {
  const findFriendRequest = await Friend.find({
    friendUserId: req.user?.userId,
    status: 'pending'
  })

  res.status(StatusCodes.OK).json({
    msg: 'GetYourFriendRequestController_GET_SUCCESS',
    data: findFriendRequest
  })
}
