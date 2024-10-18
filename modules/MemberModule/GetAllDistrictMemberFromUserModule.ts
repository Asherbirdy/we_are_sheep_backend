import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const GetAllDistrictMemberFromUserModule =async (req: Req, res: Res) => {
  if (!req.user?.districtId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide districtId',
    })
    return
  }

  const members = await Member.find({
    district: req.user?.districtId,
  })

  res.status(StatusCodes.OK).json({
    msg: 'MemberController_GET_ALL_DISTRICT_MEMBER Success',
    members,
  })
}
