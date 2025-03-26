import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const EditLandingPageInfoByIdController = async (req: Req, res: Res) => {
  const { landingPageId } = req.query
  const { 
    title,
    description,
    isCustom,
    isCustomId,
    html 
  } = req.body
  
  if (!landingPageId) {
    throw new BadRequestError('LANDING_PAGE_ID_REQUIRED')
  }

  const update = await LandingPage.findByIdAndUpdate(
    landingPageId, 
    { 
      title,
      description,
      isCustom,
      html,
      isCustomId,
      updatedBy: req.user?.userId,
    }, 
    { new: true },
  )
  res.status(StatusCodes.OK).json({
    msg: 'Edit Landing Page',
    data: update
  })
}
