import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const SetUrlPathController = async (req: Req, res: Res) => {
  const { urlPathId } = req.body
  
  res.status(StatusCodes.OK).json({
    msg: 'Post page with url path id'
  })
}