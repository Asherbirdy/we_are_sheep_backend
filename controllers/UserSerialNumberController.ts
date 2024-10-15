import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { v4 as uuidv4 } from 'uuid'

export const UserSerialNumberController = {
  create: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'User serial number created successfully',
      userSerialNumber: uuidv4()
    })
  },
  // getAll
  getAll: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'Get all user serial number',
    })
  },
  // checkValidSerialNumber
  checkValidSerialNumber: async (req: Req, res: Res) => {
    res.status(StatusCodes.OK).json({
      msg: 'Check valid user serial number',
    })
  },
}
