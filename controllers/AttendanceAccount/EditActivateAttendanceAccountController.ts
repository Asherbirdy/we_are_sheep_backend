import { StatusCodes } from '../../enums'
// import { BadRequestError } from '../../errors'
// import { AttendanceAccount } from '../../models/AttendanceAccount'
import { Req, Res } from '../../types'

export const EditActivateAttendanceAccountController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Edit activate attendance account',
  })
}