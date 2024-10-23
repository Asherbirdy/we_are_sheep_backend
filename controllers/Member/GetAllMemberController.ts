import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const GetAllMemberController = async (req: Req, res: Res) => {
  const members = await Member.find().populate('createdBy', 'name')

  res.status(StatusCodes.OK).json({
    msg: 'MemberController_GET Success',
    members
  })
}