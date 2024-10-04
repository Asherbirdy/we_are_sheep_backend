import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { Member } from '../models/Member'

export const MemberController = {
  // get all members
  get: async (req: Req, res: Res) => {
    const { active } = req.query

    if (active !== 'true' && active !== 'false') {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Please provide valid active status query string (true or false)'
      })
      return
    } 
    const members = await Member.find({ active })

    res.status(StatusCodes.OK).json({
      msg: 'MemberController_GET Success',
      members
    })
  },
  // create member
  create: async (req: Req, res: Res) => {
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

    const member = await Member.create({ name, district, identity })

    res.status(StatusCodes.CREATED).json({
      msg: 'MemberController_CREATE Success',
      member
    })
  },
  bind: async (req: Req, res: Res) => {
    const { memberId, userId } = req.body
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_BIND Success',
    })
  },
  // 通過 member
  // edit member
}

