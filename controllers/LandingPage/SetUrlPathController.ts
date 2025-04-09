import { StatusCodes } from '../../enums'
// import { BadRequestError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const SetUrlPathController = async (req: Req, res: Res) => {
  const { landingPageId, urlPathId } = req.body
  
  if(!landingPageId || !urlPathId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Landing page id and url path id are required'
    })
  }

  const findLandingPage = await LandingPage.findById(landingPageId)
  if(!findLandingPage) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: 'Landing page not found'
    })
  }

  // if(findLandingPage.urlPathId === urlPathId ) {
  //   throw new BadRequestError('LANDING_PAGE_URL_PATH_ID_ALREADY_SET')
  // }

  // findLandingPage.urlPathId = urlPathId
  await findLandingPage.save()

  res.status(StatusCodes.OK).json({
    msg: 'Landing page url path id set successfully',
    landingPage: findLandingPage
  })
}