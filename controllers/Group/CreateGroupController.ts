import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Group } from '../../models/Group'
import { BadRequestError } from '../../errors'

export const CreateGroupController = async (req: Req, res: Res) => {
  const { groupName } = req.body

  if (!groupName) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'GROUP_NAME_REQUIRED',
      msg: 'Group name is required'
    })
    return
  }

  const findExistGroup = await Group.find({
    name: groupName
  })

  if (findExistGroup.length !== 0) {
    throw new BadRequestError('GROUP_NAME_EXIST')
  }

  const group = await Group.create({
    name: groupName,
    createdBy: req.user?.userId
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'Group created successfully',
    findExistGroup,
    group
  })
}