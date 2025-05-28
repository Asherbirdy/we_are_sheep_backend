import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { AttendanceAccount } from '../../models/AttendanceAccount'
import { BadRequestError, NotFoundError } from '../../errors'

export const DeleteAttendanceAccountController = async (req: Req, res: Res) => {
  const { attendanceAccountId } = req.query

  if (!attendanceAccountId) {
    throw new BadRequestError('ATTENDANCE_ACCOUNT_ID_REQUIRED')
  }

  const existingAttendanceAccount = await AttendanceAccount.findById(attendanceAccountId)

  if (!existingAttendanceAccount) {
    throw new NotFoundError('ATTENDANCE_ACCOUNT_NOT_FOUND')
  }

  const attendanceAccount = await AttendanceAccount.findByIdAndDelete(attendanceAccountId)

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account deleted',
    data: attendanceAccount
  })
}