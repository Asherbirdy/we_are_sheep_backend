import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const GetAllAttendanceAccountController = async (req: Req, res: Res) => {

  res.status(StatusCodes.OK).json({
    msg: 'All attendance accounts fetched',
  })
}