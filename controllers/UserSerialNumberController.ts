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
}
