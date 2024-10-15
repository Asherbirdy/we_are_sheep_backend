import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { UserSerialNumber } from '../models/UserSerialNumber'

export const UserSerialNumberController = {
  create: async (req: Req, res: Res) => {
    const userSerialNumber = await UserSerialNumber.create({
      serialNumber: uuidv4(),
      createByUser: req.user?.userId
    })
    res.status(StatusCodes.OK).json({
      msg: 'User serial number created successfully',
      userSerialNumber
    })
  },
  // getAll
  getAll: async (req: Req, res: Res) => {
    const userSerialNumber = await UserSerialNumber.find({})
    res.status(StatusCodes.OK).json({
      msg: 'Get all user serial number',
      userSerialNumber
    })
  },
  // adminBindMemberToSerialNumber: async (req: Req, res: Res) => {
  //   const { serialNumber, memberId } = req.body

  //   if (!serialNumber || !memberId) {
  //     res.status(StatusCodes.BAD_REQUEST).json({
  //       msg: 'Serial number and member id is required'
  //     })
  //     return
  //   }

  //   const userSerialNumber = await UserSerialNumber.findOne({ serialNumber })

  //   if (!userSerialNumber) {
  //     res.status(StatusCodes.NOT_FOUND).json({
  //       msg: 'User serial number not found'
  //     })
  //     return
  //   }

  //   if (userSerialNumber.isUsed) {
  //     res.status(StatusCodes.BAD_REQUEST).json({
  //       msg: 'User serial number is already used'
  //     })
  //     return
  //   }

  //   const member = await Member.findById(memberId)
  //   if (!member) {
  //     res.status(StatusCodes.NOT_FOUND).json({
  //       msg: 'Member not found'
  //     })
  //     return
  //   }

  //   userSerialNumber.bindMember = memberId
  //   await userSerialNumber.save()

  //   res.status(StatusCodes.OK).json({
  //     msg: 'User serial number bind member successfully',
  //     userSerialNumber
  //   })
  // },
}
