import { StatusCodes } from '../../enums'
import { Friend } from '../../models/Friend'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const SendFriendRequestController = async (req: Req, res: Res) => {
  const { friendUserId } = req.body

  // check if friendUserId is provided
  if(!friendUserId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SendFriendRequestController_POST_ERROR_FRIEND_USER_ID_REQUIRED',
      msg: 'friendUserId is required'
    })
    return
  }

  // check if friendUserId is the same as userId
  if(friendUserId === req.user?.userId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SendFriendRequestController_POST_ERROR_FRIEND_USER_ID_SAME_AS_USER_ID',
      msg: 'friendUserId cannot be the same as userId'
    })
    return
  }

  // check if friend exists
  const friend = await User.findById(friendUserId)
  if(!friend) {
    res.status(StatusCodes.NOT_FOUND).json({
      errorCode: 'SendFriendRequestController_POST_ERROR',
      msg: 'User not found'
    })
    return
  }

  // check if friend request already exists
  const friendRequest = await Friend.findOne({
    userId: req.user?.userId,
    friendUserId
  })
  if(friendRequest) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'SendFriendRequestController_POST_ERROR_FRIEND_REQUEST_ALREADY_EXISTS',
      msg: 'Friend request already exists'
    })
    return
  }

  // create friend request
  const createFriendRequest = await Friend.create({
    userId: req.user?.userId,
    friendUserId,
    status: 'pending'
  })

  res.status(StatusCodes.OK).json({
    msg: 'SendFriendRequestController_POST_SUCCESS',
    data: createFriendRequest
  })
}
