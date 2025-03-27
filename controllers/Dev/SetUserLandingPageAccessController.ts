import { LandingPageAccess, StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const SetUserLandingPageAccessController = async (req: Req, res: Res) => {
  const { userId, accessBoolean } = req.body
  if (!userId || !accessBoolean) {
    throw new BadRequestError('USER_ID_REQUIRED')
  }

  if (!Object.values(LandingPageAccess).includes(accessBoolean)) {
    throw new BadRequestError('ACCESS_BOOLEAN_REQUIRED')
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { landingPageAccess: accessBoolean}, 
    { new: true }
  )
  res.status(StatusCodes.OK).json({
    msg: 'Set user landing page access',
    data: user
  })
}

