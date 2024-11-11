import { StatusCodes } from '../../enums'
import { MemberNote } from '../../models/MemberNotes'
import { Req, Res } from '../../types'

export const GetMemberNoteByIdController = async (req: Req, res: Res) => {
  const { memberId } = req.query
  if (!memberId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'GetMemberNoteByIdController_MEMBER_ID_REQUIRED'
    })
  }
  const memberNote = await MemberNote.find({
    memberId,
    districtId: req.user?.districtId
  })

  res.status(StatusCodes.OK).json({
    msg: 'GetMemberNoteByIdController_GET',
    memberNote,
  })
}
