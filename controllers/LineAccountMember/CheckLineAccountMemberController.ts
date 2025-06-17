import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const CheckLineAccountMemberController = async (req: Req, res: Res) => {
  res.status(StatusCodes.OK).json({
    msg: 'Line account member checked successfully'
  })
}