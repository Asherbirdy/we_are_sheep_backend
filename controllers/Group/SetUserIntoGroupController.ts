import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Group } from '../../models/Group'
import User from '../../models/User'

export const SetUserIntoGroupController = async (req: Req, res: Res) => {
  const { groupId, userId } = req.body
  const group = await Group.findById(groupId)
  if (!group) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'GROUP_NOT_FOUND',
      msg: 'Group not found'
    })
    return
  }

  const user = await User.findById(userId)
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_NOT_FOUND',
      msg: 'User not found'
    })
    return
  }

  if (user.groups.includes(groupId)) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_ALREADY_IN_GROUP',
      msg: 'User already in group'
    })

    return
  }

  user.groups.push(groupId)
  await user.save()

  res.status(StatusCodes.OK).json({
    msg: 'User set into group successfully',
    groupId,
    userId
  })
}