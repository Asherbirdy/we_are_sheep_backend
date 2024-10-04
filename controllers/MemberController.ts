import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { Member } from '../models/Member'
import User from '../models/User'

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
    if (!userId || !memberId) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Please provide memberId and userId',
      })
      return
    }
    // check user exist
    const user = await User.findOne({ _id: userId })
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json({
        msg: 'User not found',
      })
      return
    }
    // 如果 user 已經有 member 了
    if (user.member) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'User already has a member',
      })
      return
    }

    // save memberId to user  
    user.member = memberId
    await user.save()

    res.status(StatusCodes.OK).json({
      msg: 'MemberController_BIND Success',
    })
  },
  // 通過 member
  approveMemberToActive: async (req: Req, res: Res) => {
    const { memberId } = req.body
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_APPROVE Success',
    })
  },
  // edit member
  editMember: async (req: Req, res: Res) => {
    const { memberId, name, district, identity } = req.body
    res.status(StatusCodes.OK).json({
      msg: 'MemberController_EDIT Success',
    })
  },
}

