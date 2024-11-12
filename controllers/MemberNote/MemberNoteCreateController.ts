import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { MemberNote } from '../../models/MemberNotes'
import { Req, Res } from '../../types'

export const MemberNoteCreateController = async (req: Req, res: Res) => {
  const { memberId, note } = req.body
  if (!memberId || !note) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'MemberNoteCreateController_BAD_REQUEST'
    })
    console.log('test')
    return
  }

  // 一個userID只能在一個memberID下新增一筆數據
  const findMemberNote = await MemberNote.findOne({
    createdBy: req.user?.userId,
    memberId
  })

  if (findMemberNote) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'ALREADY_CREATED',
      msg: 'You have already created a note for this member'
    })
    return
  }

  const memberData = await Member.findOne({
    _id: memberId,
  })

  if (!memberData) {
    res.status(StatusCodes.NOT_FOUND).json({
      errorCode: 'NOT_FOUND',
      msg: 'Member not found'
    })
    return
  }

  const createMemberNote = await MemberNote.create({
    districtId: req.user?.districtId,
    createdBy: req.user?.userId,
    content: note,
    memberId
  })

  res.status(StatusCodes.OK).json({
    msg: 'MemberNoteCreateController_CREATE',
    createMemberNote
  })
}
