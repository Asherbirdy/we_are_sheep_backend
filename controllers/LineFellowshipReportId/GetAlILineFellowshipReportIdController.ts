import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const GetAllLineFellowshipReportIdController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id fetched successfully'
  })
}