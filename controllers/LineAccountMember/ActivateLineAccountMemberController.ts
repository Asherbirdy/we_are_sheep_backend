import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const ActivateLineAccountMemberController = async (req: Req, res: Res) => {
  const { lineProfileId, serialNumber } = req.body

  if (!lineProfileId || !serialNumber) {
    throw new BadRequestError('LINE_PROFILE_ID_AND_SERIAL_NUMBER_REQUIRED')
  }

  const checkExistingLineProfileId = await LineAccountMember.findOne({
    lineProfileId: lineProfileId
  })

  if (checkExistingLineProfileId) {
    throw new BadRequestError('LINE_PROFILE_ID_ALREADY_EXISTS')
  }

  const attendanceAccount = await LineAccountMember.findOne({
    serialNumber 
  })

  if (!attendanceAccount) {
    throw new BadRequestError('ATTENDANCE_ACCOUNT_NOT_FOUND')
  }

  attendanceAccount.active = true
  attendanceAccount.lineProfileId = lineProfileId
  await attendanceAccount.save()

  res.status(StatusCodes.OK).json({
    msg: 'Activate attendance account',
  })
}