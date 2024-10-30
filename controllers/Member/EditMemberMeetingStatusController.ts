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
  
  const member = await Member.findOne({ _id: memberId })
  if (!member) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Member not found',
    })
    return
  }

  if(member.district.toString() !== req.user?.districtId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'You are not allowed to edit this member',
    })
    return
  }

  member.meetingStatus = meetingStatus
  await member.save()
  
  res.status(StatusCodes.OK).json({
    msg: 'MemberController_EDIT_MEMBER_STATUS Success',
    member
  })
}
