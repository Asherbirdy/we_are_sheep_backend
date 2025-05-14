import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { AttendanceAccount } from '../../models/AttendanceAccount'
import { Req, Res } from '../../types'

export const CreateAttendanceAccountController = async (req: Req, res: Res) => {
  const { name, serialNumber} = req.body

  if (!name || !serialNumber) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Name and serial number are required',
    })
    return
  }

  // find name exist
  const nameExist = await AttendanceAccount.findOne({ name })
  if (nameExist) {
    throw new BadRequestError('NAME_ALREADY_EXIST')
  }

  // find serial number exist
  const serialNumberExist = await AttendanceAccount.findOne({ serialNumber })
  if (serialNumberExist) {
    throw new BadRequestError('SERIAL_NUMBER_ALREADY_EXIST')
  }

  const attendanceAccount = await AttendanceAccount.create({
    name,
    serialNumber,
    serialNumberExpiredDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    active: false
  })

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account created',
    data: attendanceAccount
  })
}