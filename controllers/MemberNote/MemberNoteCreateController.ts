import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const MemberNoteCreateController = async (req: Req, res: Res) => {
  const { memberId, note } = req.body
  if (!memberId || !note) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'MemberNoteCreateController_BAD_REQUEST'
    })
    return
  }

  // 一個req.user.userId 只能create 一個member note
  const member = await Member.findOne({
    _id: memberId,
    district: req.user?.districtId
  })
  if (!member) {
    res.status(StatusCodes.NOT_FOUND).json({
      msg: 'MemberNoteCreateController_NOT_FOUND'
    })
    return
  }

  member.notes.push(note)
  await member.save()

  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteCreateController_CREATE'
  })
}
