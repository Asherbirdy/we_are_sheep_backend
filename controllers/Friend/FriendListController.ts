import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import { Req, Res } from '../../types'

export const FriendListController = async (req: Req, res: Res) => {

  const friends = await Friend.find({
    status: 'accepted',
    $or: [
      { userId: req.user?.userId },
      { friendUserId: req.user?.userId }
    ]
  })

  res.status(StatusCodes.OK).json({
    msg: 'FriendListController_GET_SUCCESS',
    data: friends
  })
}
