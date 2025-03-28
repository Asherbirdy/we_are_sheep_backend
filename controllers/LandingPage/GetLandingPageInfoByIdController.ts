import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const GetLandingPageInfoByIdController = async (req: Req, res: Res) => {

  res.status(StatusCodes.OK).json({
    msg: 'asda'
  })
}