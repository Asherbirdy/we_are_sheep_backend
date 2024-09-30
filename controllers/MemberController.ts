import { StatusCodes } from '../enums'
import { Req, Res } from '../types'

export const MemberController = {
  get: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_GET Success',
    })
  }
}

