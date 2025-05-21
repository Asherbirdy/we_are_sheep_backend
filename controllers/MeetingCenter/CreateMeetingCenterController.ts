import axios from 'axios'
import config from '../../config'
import { StatusCodes } from '../../enums'
import { MeetingCenter } from '../../models/MeetingCenter'
import { Req, Res } from '../../types'

export const CreateMeetingCenterController = async (req: Req, res: Res) => {
  const response = await axios.get(config.google_meeting_center_api_url)

  await MeetingCenter.deleteMany({})
  const createMeetingCenter = await Promise.all(response.data.map(async (item: any) => {
    return await MeetingCenter.create({
      ... item,
    })
  }))
  res.status(StatusCodes.OK).json({
    msg: 'Create Meeting Center',
    data: createMeetingCenter
  })
}
