import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const GetAllDistrictMemberFromUserController = async (req: Req, res: Res) => {
  if (!req.user?.districtId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide districtId,if you are developer, please provide districtId',
    })
    return
  }

  const members = await Member.find({
    district: req.user?.districtId,
  }).select('name meetingStatus')

  // // Group members by meetingStatus A, B, C ...
  // const groupedMembers = members.reduce((acc, member) => {
  //   const status = member.meetingStatus
  //   if (!acc[ status ]) {
  //     acc[ status ] = []
  //   }
  //   acc[ status ] = [... acc[ status ], member]
  //   return acc
  // }, {} as Record<string, typeof members>)

  res.status(StatusCodes.OK).json({
    msg: 'MemberController',
    members
  })
}
