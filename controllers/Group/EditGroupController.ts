import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Group } from '../../models/Group'
import User from '../../models/User'

export const EditGroupController = async (req: Req, res: Res) => {
  const { groupId, groupName, groupDescription } = req.body

  if (!groupId || !groupName || !groupDescription) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'GROUP_ID_OR_GROUP_NAME_OR_GROUP_DESCRIPTION_REQUIRED',
      msg: 'Group ID or Group Name or Group Description is required'
    })
    return
  }

  // 檢查群組是否存在
  const group = await Group.findById(groupId)
  if (!group) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'GROUP_NOT_FOUND',
      msg: 'Group not found'
    })
    return
  }

  // 檢查使用者是否存在
  const user = await User.findById(req.user?.userId)
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_NOT_FOUND',
      msg: 'User not found'
    })
    return
  }

  // 檢查使用者是否是群組領袖
  if (!user.leaderOfGroupIds.includes(groupId)) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_NOT_LEADER_OF_GROUP',
      msg: 'User not leader of group'
    })
    return
  }

  group.name = groupName
  group.description = groupDescription
  await group.save()

  res.status(StatusCodes.OK).json({
    msg: 'Group updated successfully',
    group
  })
}