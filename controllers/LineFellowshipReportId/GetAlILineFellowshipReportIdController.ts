import { StatusCodes } from '../../enums'
import { LineFellowshipReportId } from '../../models/LineFellowshipReportId'
import { Req, Res } from '../../types'

export const GetAllLineFellowshipReportIdController = async (req: Req, res: Res) => {
  const lineFellowshipReportIds = await LineFellowshipReportId.find()
  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id fetched successfully',
    lineFellowshipReportIds
  })
}