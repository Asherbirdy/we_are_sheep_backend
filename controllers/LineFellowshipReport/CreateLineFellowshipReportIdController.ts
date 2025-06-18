import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineFellowshipReport } from '../../models/LineFellowshipReport'
import { Req, Res } from '../../types'

export const CreateLineFellowshipReportIdController = async (req: Req, res: Res) => {
  const { name, recordWeekSundayDate } = req.body

  if (!name || !recordWeekSundayDate) {
    throw new BadRequestError('NAME_RECORD_WEEK_SUNDAY_DATE_REQUIRED')
  }

  const lineFellowshipReportId = await LineFellowshipReport.create({
    name,
    createBy: req.user?.userId,
    expiredTime: new Date(Date.now() + 24 * 60 * 60 * 1000 * 3),
    recordWeekSundayDate
  })

  res.status(StatusCodes.OK).json({
    msg: 'Line fellowship report id created successfully',
    lineFellowshipReportId
  })
}