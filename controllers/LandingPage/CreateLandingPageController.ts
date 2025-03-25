import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const CreateLandingPageController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Create Landing Page'
  })
}
