import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'
import { LineAccountMember } from '../../models/LineAccountMember'
export const GetAllLineAccountMemberController = async (req: Req, res: Res) => {
  const attendanceAccounts = await LineAccountMember.find()

  res.status(StatusCodes.OK).json({
    msg: 'All attendance accounts fetched',
    data: attendanceAccounts
  })
}