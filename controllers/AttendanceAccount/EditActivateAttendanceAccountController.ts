import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { AttendanceAccount } from '../../models/AttendanceAccount'
import { Req, Res } from '../../types'

export const EditActivateAttendanceAccountController = async (req: Req, res: Res) => {

  const { 
    id,
    name, 
    lineProfileId,
    active
  } = req.body
  
  if (!name || !lineProfileId) {
    throw new BadRequestError('NAME_AND_LINE_PROFILE_ID_REQUIRED')
  }

  const attendanceAccount = await AttendanceAccount.findById(id)

  if (!attendanceAccount) {
    throw new BadRequestError('ATTENDANCE_ACCOUNT_NOT_FOUND')
  }

  attendanceAccount.name = name
  attendanceAccount.lineProfileId = lineProfileId
  attendanceAccount.active = active
  await attendanceAccount.save()

  res.status(StatusCodes.OK).json({
    msg: 'Edit activate attendance account',
    data: attendanceAccount
  })
}