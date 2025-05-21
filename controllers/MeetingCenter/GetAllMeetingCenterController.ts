import { StatusCodes } from '../../enums'
import { MeetingCenter } from '../../models/MeetingCenter'
import { Req, Res } from '../../types'

export const GetAllMeetingCenterController = async (req: Req, res: Res) => {
  const meetingCenter = await MeetingCenter.find()
  res.status(StatusCodes.OK).json({
    msg: 'Get All Meeting Center',
    data: meetingCenter
  })
}
