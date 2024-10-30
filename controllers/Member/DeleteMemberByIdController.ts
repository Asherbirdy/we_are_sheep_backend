import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const DeleteMemberByIdController = async (req: Req, res: Res) => {
  const { memberId } = req.body
  if (!memberId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide memberId',
    })
    return
  }

  const member = await Member.findById(memberId)
  if (!member) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Member not found',
    })
    return
  }

  if (req.user?.districtId !== member.district.toString()) {
    res.status(StatusCodes.FORBIDDEN).json({
      msg: 'You are not allowed to delete this member',
    })
    return
  }

  await Member.findByIdAndDelete(memberId)

  res.status(StatusCodes.OK).json({
    msg: 'DeleteMemberByIdController_DELETE',
  })
}