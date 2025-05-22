import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const DeleteLandingPageByIdController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Delete Landing Page',
  })
}