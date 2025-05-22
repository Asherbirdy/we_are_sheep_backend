import { StatusCodes } from '../../enums'
import { BadRequestError, NotFoundError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const DeleteLandingPageByIdController = async (req: Req, res: Res) => {
  const { landingPageId } = req.query

  if (!landingPageId) {
    throw new BadRequestError('LANDING_PAGE_ID_REQUIRED')
  }

  const landingPage = await LandingPage.findById(landingPageId)

  if (!landingPage) {
    throw new NotFoundError('LANDING_PAGE_NOT_FOUND')
  }

  await landingPage.deleteOne()

  res.status(StatusCodes.OK).json({
    msg: 'Delete Landing Page',
  })
}