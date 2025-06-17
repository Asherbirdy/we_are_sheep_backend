import { StatusCodes } from '../../enums'
import { FellowshipRecord } from '../../models/FellowshipRecord'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const CheckRecordByReportIdController = async (req: Req, res: Res) => {
  const { reportId } = req.body

  res.status(StatusCodes.OK).json({
    msg: 'Check record by report id',
  })
}