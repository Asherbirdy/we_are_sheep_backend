import { StatusCodes } from '../../enums'
import { Member } from '../../models/Member'
import { Req, Res } from '../../types'

export const CreateMemberModule = async (req: Req, res: Res) => {
  const { name, district, identity } = req.body
  if (!name || !district || !identity) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide name, district, identity',
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
    district,
    identity,
    createdBy: req.user?.userId
  })

  res.status(StatusCodes.CREATED).json({
    msg: 'MemberController_CREATE Success',
    member
  })
}