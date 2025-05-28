import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { AttendanceAccount } from '../../models/AttendanceAccount'
export const DeleteAttendanceAccountController = async (req: Req, res: Res) => {
  const { attendanceAccountId } = req.query

  const attendanceAccount = await AttendanceAccount.findByIdAndDelete(attendanceAccountId)

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account deleted',
    data: attendanceAccount
  })
}