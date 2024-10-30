import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const CreateMemberToDistrictController = async (req: Req, res: Res) => {
  const { name, identity, meetingStatus } = req.body
  if (!name || !identity || !meetingStatus) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide name, identity, meetingStatus',
    })
    return
  }
  
  // check member name exist
  const checkMemberNameExist = await Member.findOne({ name })
  if (checkMemberNameExist) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Member name ${ name } already exists`,
    })
    return 
  }

  const member = await Member.create({
    name,
    district: req.user?.districtId,
    identity,
    meetingStatus,
    createdBy: req.user?.userId
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'MemberController_CREATE Success',
    member
  })
}