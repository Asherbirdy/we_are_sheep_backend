import { StatusCodes } from '../enums'
import { Req, Res } from '../types'

export const MemberController = {
  get: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_GET Success',
    })
  },
  create: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_CREATE Success',
    })
  },
  bind: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_BIND Success',
    })
  },
  // create member 
  // bind member to user 限定 admin 
}

