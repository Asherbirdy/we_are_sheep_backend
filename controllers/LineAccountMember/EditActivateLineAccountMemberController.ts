import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const EditActivateLineAccountMemberController = async (req: Req, res: Res) => {

  const { lineAccountMemberId, active } = req.body
  
  if (!lineAccountMemberId) {
    throw new BadRequestError('LINE_ACCOUNT_MEMBER_ID_REQUIRED')
  }

  const lineAccountMember = await LineAccountMember.findById(
    lineAccountMemberId
  )

  if (!lineAccountMember) {
    throw new BadRequestError('LINE_ACCOUNT_MEMBER_NOT_FOUND')
  }

  lineAccountMember.active = active
  await lineAccountMember.save()

  res.status(StatusCodes.OK).json({
    msg: 'Edit activate line account member',
    data: lineAccountMember
  })
}