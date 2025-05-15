import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeeting } from '../../models/HomeMeeting'
export const CreateHomeMeetingController = async (req: Req, res: Res) => {
  const { groupName, attendanceAccount, district } = req.body

  if(!groupName || !attendanceAccount || !district) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Missing required fields'
    })
  }

  const create = await HomeMeeting.create({
    groupName, attendanceAccount, district
  })

  res.status(StatusCodes.OK).json({
    msg: 'Create Home Meeting',
    data: create
  })
}