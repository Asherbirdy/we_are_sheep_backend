import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const SetUserLandingPageAccessController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Set user landing page access',
  })
}

