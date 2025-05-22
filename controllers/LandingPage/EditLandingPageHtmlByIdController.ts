import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const EditLandingPageHtmlByIdController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Edit Landing Page HTML',
  })
}