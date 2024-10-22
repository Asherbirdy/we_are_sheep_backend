import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const EditMemberMeetingStatusController = async (req: Req, res: Res) => {
  const { memberId, meetingStatus } = req.body
  if (!memberId || !meetingStatus) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide memberId and meetingStatus',
    })
    return
  }

  const member = await Member.findByIdAndUpdate(
    memberId,
    { meetingStatus },
    { new: true }
  )
  
  res.status(StatusCodes.OK).json({
    msg: 'MemberController_EDIT_MEMBER_STATUS Success',
    member
  })
}
