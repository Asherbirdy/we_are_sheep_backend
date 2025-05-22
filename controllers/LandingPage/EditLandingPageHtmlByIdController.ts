import { StatusCodes } from '../../enums'
import { BadRequestError, NotFoundError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const EditLandingPageHtmlByIdController = async (req: Req, res: Res) => {
  const { landingPageId, html } = req.body

  if (!landingPageId) {
    throw new BadRequestError('LANDING_PAGE_ID_REQUIRED')
  }

  const landingPage = await LandingPage.findById(landingPageId)

  if (!landingPage) {
    throw new NotFoundError('LANDING_PAGE_NOT_FOUND')
  }

  landingPage.html = html
  await landingPage.save()

  res.status(StatusCodes.OK).json({
    msg: 'Edit Landing Page HTML',
    landingPage
  })
}