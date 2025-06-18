import { StatusCodes } from '../../enums'
import { LineFellowshipReport } from '../../models/LineFellowshipReport'
import { Req, Res } from '../../types'

export const GetAllLineFellowshipReportIdController = async (req: Req, res: Res) => {
  const lineFellowshipReportIds = await LineFellowshipReport.find()
  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id fetched successfully',
    lineFellowshipReportIds
  })
}