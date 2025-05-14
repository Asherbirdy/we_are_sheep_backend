import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateAttendanceAccountController = async (req: Req, res: Res) => {

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account created',
  })
}