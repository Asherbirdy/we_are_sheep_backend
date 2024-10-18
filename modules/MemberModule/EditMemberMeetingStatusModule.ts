import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditMemberMeetingStatusModule =async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'MemberController_EDIT_MEMBER_STATUS Success',
  })
}