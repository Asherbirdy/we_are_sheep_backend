import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const ApproveMemberToActiveModule = async (req: Req, res: Res) => {
  const { memberId } = req.body
  if (!memberId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide memberId',
    })
    return
  }
  const member = await Member.findByIdAndUpdate(memberId, { active: true }, { new: true })
  res.status(StatusCodes.OK).json({
    msg: 'MemberController_APPROVE Success',
    member
  })
}