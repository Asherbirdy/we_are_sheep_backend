import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { AttendanceAccount } from '../../models/AttendanceAccount'
export const GetAllAttendanceAccountController = async (req: Req, res: Res) => {
  const attendanceAccounts = await AttendanceAccount.find()

  res.status(StatusCodes.OK).json({
    msg: 'All attendance accounts fetched',
    data: attendanceAccounts
  })
}