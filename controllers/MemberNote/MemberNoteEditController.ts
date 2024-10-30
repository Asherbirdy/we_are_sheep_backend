import { StatusCodes } from '../../enums'
import { MemberNote } from '../../models/MemberNotes'
import { Req, Res } from '../../types'

export const MemberNoteEditController = async (req: Req, res: Res) => {
  const { memberId, content } = req.body
  if (!memberId || !content) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'MemberNoteEditController_MEMBER_ID_REQUIRED'
    })
  }
  const memberNote = await MemberNote.findOne({ memberId, districtId: req.user?.districtId })
  if (!memberNote) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: 'MemberNoteEditController_MEMBER_NOTE_NOT_FOUND'
    })
  }
  
  memberNote.content = content
  await memberNote.save()

  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteEditController_EDIT'
  })
}
