import { LandingPageAccess, StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const SetUserLandingPageAccessController = async (req: Req, res: Res) => {
  const { userId, accessArray } = req.body
  if (!userId) {
    throw new BadRequestError('USER_ID_REQUIRED')
  }

  // 檢查 accessArray 中的值是否為有效的 LandingPageAccess 值
  const validAccessValues = Object.values(LandingPageAccess)
  for (const access of accessArray) {
    if (!validAccessValues.includes(access)) {
      throw new BadRequestError('INVALID_ACCESS_VALUE')
    }
  }

  await User.findByIdAndUpdate(
    userId,
    { landingPageAccess: accessArray}, 
    { new: true }
  )
  res.status(StatusCodes.OK).json({
    msg: `Set user landing page access to : ${ accessArray }`,
  })
}

