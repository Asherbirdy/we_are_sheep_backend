import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const GetAllMemberController = async (req: Req, res: Res) => {
  const { active } = req.query

  if (active !== 'true' && active !== 'false') {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide valid active status query string (true or false)'
    })
    return
  } 
  const members = await Member.find({ active }).populate('createdBy', 'name')

  res.status(StatusCodes.OK).json({
    msg: 'MemberController_GET Success',
    members
  })
}