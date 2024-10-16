import { Role, StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { UserSerialNumber } from '../models/UserSerialNumber'
import { District } from '../models/District'

export const UserSerialNumberController = {
  create: async (req: Req, res: Res) => {
    const { role, districtId, notes } = req.body
    if (!role || !districtId) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Please provide all required fields'
      })
      return
    }

    if(districtId === Role.dev || districtId === Role.admin) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'District id is invalid'
      })
      return
    }

    const userSerialNumber = await (await UserSerialNumber.create({
      serialNumber: uuidv4(),
      createByUser: req.user?.userId,
      role,
      districtId,
      notes
    })).populate({
      path: 'districtId',
      model: District,
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
