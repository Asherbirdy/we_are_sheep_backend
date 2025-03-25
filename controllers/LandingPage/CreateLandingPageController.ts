import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LandingPage } from '../../models/LandingPage'
import { Req, Res } from '../../types'

export const CreateLandingPageController = async (req: Req, res: Res) => {
  const { title, } = req.body
  if (!title) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Title is required'
    })
    return
  }

  const findExist = await LandingPage.findOne({ title })
  if (findExist) {
    throw new BadRequestError('Landing Page already exists')
  }
  const create = await LandingPage.create({
    title,
    description: '',
    urlPathId: '',
    isCustom: false,
    isActive: true,
    html: ''
  })
  res.status(StatusCodes.OK).json({
    msg: 'Create Landing Page',
    data: create
  })
}
