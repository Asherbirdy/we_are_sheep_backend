import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import { Req, Res } from '../../types'

// 接受好友請求
export const AcceptFriendRequestController = async (req: Req, res: Res) => {
  const { friendRequestId } = req.body
  if (!friendRequestId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'AcceptFriendRequestController_BAD_REQUEST',
      msg: 'friendRequestId is required'
    })
    return
  }

  const findFriendRequest = await Friend.findOneAndUpdate({
    _id: friendRequestId,
    status: 'pending'
  }, { status: 'accepted' }, { new: true })

  res.status(StatusCodes.OK).json({
    msg: 'AcceptFriendRequestController_GET_SUCCESS',
    data: findFriendRequest
  })
}
