import { StatusCodes } from '../../enums'
import { Activity } from '../../models/Activity'
import { Req, Res } from '../../types'

export const GetActivitybyYearMonthController = async ( req: Req, res: Res ) => {
  const { year, month } = req.query
  if(!year || !month) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_QUERY_PARAMS',
      msg: 'Year and month are required'
    })
    return
  } 

  if(Number(month) < 1 || Number(month) > 12) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: 'INVALID_MONTH',
      msg: 'Invalid month. Please provide a month between 1 and 12.'
    })
    return
  }

  const activities = await Activity.find({
    year: Number(year),
    month: Number(month)
  }).select('date title content')

  res.status(StatusCodes.OK).json({
    msg: 'Activity by month',
    data: activities
  })
} 