import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { HomeMeeting } from '../../models/HomeMeeting'
import { Sheep } from '../../models/Sheep'
import { BadRequestError } from '../../errors'
export const CreateHomeMeetingController = async (req: Req, res: Res) => {
  const { groupName, attendanceAccount, district, meetingPeople } = req.body

  if(!groupName || !attendanceAccount || !district) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Missing required fields'
    })
  }
  
  const invalidSheepIds = []

  for (const sheepId of meetingPeople) {
    const sheepExists = await Sheep.findById(sheepId)
    if (!sheepExists) {
      invalidSheepIds.push(sheepId)
    }
  }

  if (invalidSheepIds.length > 0) {
    throw new BadRequestError('SHEEP_NOT_FOUND')
  }

  const create = await HomeMeeting.create({
    groupName, 
    attendanceAccount,
    district,
    meetingPeople
  })

  res.status(StatusCodes.OK).json({
    msg: 'Create Home Meeting',
    data: create
  })
}