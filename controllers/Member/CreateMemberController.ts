import { StatusCodes } from '../../enums'
import { District } from '../../models/District'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const CreateMemberController = async (req: Req, res: Res) => {
  const { name, district, identity, meetingStatus } = req.body
  if (!name || !district || !identity || !meetingStatus) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide name, district, identity, meetingStatus',
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

  const findDistrict = await District.findOne({ _id: district })
  if (!findDistrict) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'District not found'
    })
    return
  }

  const member = await Member.create({
    name,
    district,
    identity,
    meetingStatus,
    createdBy: req.user?.userId
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'MemberController_CREATE Success',
    member
  })
}