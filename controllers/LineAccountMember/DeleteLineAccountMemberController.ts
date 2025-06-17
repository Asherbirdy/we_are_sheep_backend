import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { LineAccountMember } from '../../models/LineAccountMember'
import { BadRequestError, NotFoundError } from '../../errors'

export const DeleteLineAccountMemberController = async (req: Req, res: Res) => {
  const { lineAccountMemberId } = req.query

  if (!lineAccountMemberId) {
    throw new BadRequestError('ATTENDANCE_ACCOUNT_ID_REQUIRED')
  }

  const existingAttendanceAccount = await LineAccountMember.findById(lineAccountMemberId)

  // Check if the attendance account is active
  if (existingAttendanceAccount?.active) {
    throw new BadRequestError('ACTIVE_CANNOT_BE_DELETED')
  }

  if (!existingAttendanceAccount) {
    throw new NotFoundError('ATTENDANCE_ACCOUNT_NOT_FOUND')
  }

  const attendanceAccount = await LineAccountMember.findByIdAndDelete(lineAccountMemberId)

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account deleted',
    data: attendanceAccount
  })
}