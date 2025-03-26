import { StatusCodes } from '../../enums'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const CreateLandingPageController = async (req: Req, res: Res) => {
  const { title } = req.body

  const create = await LandingPage.create({
    title,
  })
  res.status(StatusCodes.OK).json({
    msg: 'Create Landing Page',
    data: create
  })
}
