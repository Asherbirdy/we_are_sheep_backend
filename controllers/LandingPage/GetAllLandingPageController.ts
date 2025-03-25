import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const GetAllLandingPageController = async (req: Req, res: Res) => {
  const landingPages = await LandingPage.find().select('-html')
  res.status(StatusCodes.OK).json({
    msg: 'Get all landing pages',
    data: landingPages
  })
}