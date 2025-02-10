import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const GetDistrictMemberController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Get District Member',
  })
}

