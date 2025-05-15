import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeeting } from '../../models/HomeMeeting'

export const GetAllHomeMeetingController = async (req: Req, res: Res) => {
  const homeMeetings = await HomeMeeting.find()
  res.status(StatusCodes.OK).json({
    homeMeetings
  })
}