import { StatusCodes } from '../../enums'
import { Activity } from '../../models/Activity'
import { Req, Res } from '../../types'

export const GetYearActivityController = async ( req: Req, res: Res ) => {
  const { year } = req.query
  const activities = await Activity.find({ year }).sort({ createdAt: -1 }).limit(10)
  res.status(StatusCodes.OK).json({
    msg: 'Recently activity',
    data: activities
  })
}