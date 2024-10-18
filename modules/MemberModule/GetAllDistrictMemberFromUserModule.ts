import { StatusCodes } from '../../enums'
import { Req, Res } from '../../types'

export const GetAllDistrictMemberFromUserModule =async (req: Req, res: Res) => {
  console.log(req.user?.districtId)
  const { districtId } = req.body
  if (!districtId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide districtId',
    })
    return
  }

  res.status(StatusCodes.OK).json({
    msg: 'MemberController_GET_ALL_DISTRICT_MEMBER Success',
  })
}
