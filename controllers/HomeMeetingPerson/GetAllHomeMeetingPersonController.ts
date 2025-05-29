import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeeting } from '../../models/HomeMeeting'

export const GetAllHomeMeetingPersonController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get all home meeting persons',
  })
}