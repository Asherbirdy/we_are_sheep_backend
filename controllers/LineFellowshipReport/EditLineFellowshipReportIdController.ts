import { StatusCodes } from '../../enums'
import { BadRequestError, NotFoundError } from '../../errors'
import { LineFellowshipReport } from '../../models/LineFellowshipReport'
import { Req, Res } from '../../types'

export const EditLineFellowshipReportIdController = async (req: Req, res: Res) => {
  const { lineFellowshipReportId, name } = req.body

  if (!lineFellowshipReportId || !name) {
    throw new BadRequestError('ALL_FIELDS_REQUIRED')
  }

  const lineFellowshipReport = await LineFellowshipReport.findById(lineFellowshipReportId)

  if (!lineFellowshipReport) {
    throw new NotFoundError('LINE_FELLOWSHIP_REPORT_ID_NOT_FOUND')
  }

  lineFellowshipReport.name = name
  await lineFellowshipReport.save()

  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id edited successfully',
    lineFellowshipReportId
  })
}