import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const GetLandingPageInfoByIdController = async (req: Req, res: Res) => {
  const { landingPageId } = req.query

  if(!landingPageId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Landing page id is required'
    })
  }

  const landingPage = await LandingPage.findById(landingPageId)

  if (!landingPage) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: 'Landing Page Not Found'
    })
  }

  res.status(StatusCodes.OK).json({
    msg: 'Landing Page Info',
    landingPage
  })
}