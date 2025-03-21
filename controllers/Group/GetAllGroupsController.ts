import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { Group } from '../../models/Group'

export const GetAllGroupsController = async (req: Req, res: Res) => {
  const groups = await Group.find()

  res.status(StatusCodes.OK).json({
    groups
  })
}
