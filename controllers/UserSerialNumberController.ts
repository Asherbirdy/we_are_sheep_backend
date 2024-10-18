import { StatusCodes } from '../enums'
import { Req, Res } from '../types'
import { UserSerialNumber } from '../models/UserSerialNumber'
import { District } from '../models/District'
import { CreateSerialNumberModule } from '../modules'

export const UserSerialNumberController = {
  create: CreateSerialNumberModule,
  // getAll
  getAll: async (req: Req, res: Res) => {
    const userSerialNumber = await UserSerialNumber.find({})
    res.status(StatusCodes.OK).json({
      msg: 'Get all user serial number',
      userSerialNumber
    })
  },
  edit: async (req: Req, res: Res) => {
    const {serialNumberId, role, districtId, notes} = req.body
    if(!serialNumberId || !role || !districtId ) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Please provide all required fields'
      })
      return
    }
    
    const updatedUserSerialNumber = await UserSerialNumber.findByIdAndUpdate(
      serialNumberId, {
        role,
        districtId,
        notes
      }, {new: true}).populate({
      path: 'districtId',
      model: District,
    })

    res.status(StatusCodes.OK).json({
      msg: 'Edit user serial number',
      updatedUserSerialNumber
    })
  },
  delete: async (req: Req, res: Res) => {
    const { id } = req.params
    await UserSerialNumber.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({
      msg: 'User serial number deleted successfully'
    })
  }
}