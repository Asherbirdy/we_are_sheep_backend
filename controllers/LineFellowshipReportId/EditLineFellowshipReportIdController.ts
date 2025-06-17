import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineFellowshipReportId } from '../../models/LineFellowshipReportId'
import { Req, Res } from '../../types'

export const EditLineFellowshipReportIdController = async (req: Req, res: Res) => {
  const { lineFellowshipReportId, name, recordWeekSundayDate } = req.body

  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id edited successfully',
    lineFellowshipReportId
  })
}