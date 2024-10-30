import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const EditMemberInfoController = async (req: Req, res: Res) => {
  const { memberId, name, identity } = req.body
  if (!memberId || !name || !identity) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide memberId, name, identity',
    })
    return
  }
  const member = await Member.findByIdAndUpdate(memberId, { name, district: req.user?.districtId, identity }, { new: true })
  res.status(StatusCodes.OK).json({
    msg: 'MemberController_EDIT Success',
    member
  })
}