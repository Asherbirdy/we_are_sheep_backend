import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const EditLandingPageInfoByIdController = async (req: Req, res: Res) => {
  const { landingPageId } = req.query
  const { 
    title,
    description,
    isCustom,
    isCustomId
  } = req.body
  
  if (!landingPageId) {
    throw new BadRequestError('LANDING_PAGE_ID_REQUIRED')
  }

  const user = await User.findById(req.user?.userId)

  const update = await LandingPage.findByIdAndUpdate(
    landingPageId, 
    { 
      title,
      description,
      isCustom,
      isCustomId,
      updatedBy: user?.name?.toString() || '',
    }, 
    { new: true },
  )
  res.status(StatusCodes.OK).json({
    msg: 'Edit Landing Page',
    data: update
  })
}
