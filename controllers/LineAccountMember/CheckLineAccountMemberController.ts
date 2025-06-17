import { StatusCodes } from '../../enums'
import { BadRequestError, NotFoundError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const CheckLineAccountMemberController = async (req: Req, res: Res) => {
  const { lineProfileId } = req.body

  if (!lineProfileId) {
    throw new BadRequestError('LINE_PROFILE_ID_REQUIRED')
  }

  const lineAccountMember = await LineAccountMember.findOne({ lineProfileId })
  if (!lineAccountMember) {
    throw new NotFoundError('LINE_ACCOUNT_MEMBER_NOT_FOUND')
  }

  if (!lineAccountMember.active) {
    throw new BadRequestError('LINE_ACCOUNT_MEMBER_NOT_ACTIVE')
  }

  res.status(StatusCodes.OK).json({
    msg: 'Line account member checked successfully',
    lineAccountMember
  })
}