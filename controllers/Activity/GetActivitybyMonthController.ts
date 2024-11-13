import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const GetActivitybyMonthController = async ( req: Req, res: Res ) => {
  res.status(StatusCodes.OK).json({
    message: 'Activity by month'
  })
} 