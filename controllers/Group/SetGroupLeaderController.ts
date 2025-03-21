import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Group } from '../../models/Group'
import User from '../../models/User'

export const SetGroupLeaderController = async (req: Req, res: Res) => {
  const { groupId, userId } = req.body

  if (!groupId || !userId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'GROUP_ID_OR_USER_ID_REQUIRED',
      msg: 'Group ID or User ID is required'
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
  const user = await User.findById(userId)
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_NOT_FOUND',
      msg: 'User not found'
    })
    return
  }

  // 檢查使用者是否在群組中

  const isUserInGroup = user.groups.includes(groupId)
  if (!isUserInGroup) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_NOT_IN_GROUP',
      msg: 'User not in group'
    })
    return
  }

  // 檢查使用者是否已經是群組領袖
  const isUserLeaderOfGroup = user.leaderOfGroupIds.includes(groupId)
  if (isUserLeaderOfGroup) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'USER_ALREADY_LEADER_OF_GROUP',
      msg: 'User already leader of group'
    })
    return
  }

  user.leaderOfGroupIds.push(groupId)
  await user.save()
  
  res.status(StatusCodes.OK).json({
    msg: 'SetGroupLeaderController_GET_SUCCESS'
  })
}
