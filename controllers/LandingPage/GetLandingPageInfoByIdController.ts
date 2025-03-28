import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import User from '../../models/User'
import { Req, Res } from '../../types'

export const GetLandingPageInfoByIdController = async (req: Req, res: Res) => {
  const { id } = req.query
  const landingPage = await LandingPage.findById(id)

  if (!landingPage) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: 'Landing Page Not Found'
    })
  }

  const user = await User.findById(req.user?.userId)
  if (req.user?.userId) { 
    landingPage.lastEditVisited = new Date()
    landingPage.lastEditVisitedUser = user?.name?.toString() || ''
    await landingPage.save()
  }

  res.status(StatusCodes.OK).json({
    msg: 'Landing Page Info',
    landingPage
  })
}