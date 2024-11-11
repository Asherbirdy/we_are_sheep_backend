import { StatusCodes } from '../../enums'
import { MemberNote } from '../../models/MemberNotes'
import { Req, Res } from '../../types'

export const MemberNoteDeleteController = async (req: Req, res: Res) => {
  const { memberNoteId } = req.body
  if (!memberNoteId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'MemberNoteDeleteController_MEMBER_NOTE_ID_REQUIRED'
    })
  }
  
  const memberNote = await MemberNote.findById(memberNoteId)
  if (!memberNote) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: 'MemberNoteDeleteController_MEMBER_NOTE_NOT_FOUND'
    })
  }
  
  if (memberNote.createdBy.toString() !== req.user?.userId) {
    return res.status(StatusCodes.FORBIDDEN).json({
      msg: 'MemberNoteDeleteController_FORBIDDEN'
    })
  }

  await memberNote.deleteOne()
  
  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteDeleteController_DELETE'
  })
}
