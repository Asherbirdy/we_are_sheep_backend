import { Role, StatusCodes } from '../../enums'
import { District } from '../../models/District'
import { Req, Res } from '../../types'
import { v4 as uuidv4 } from 'uuid'
import { UserSerialNumber } from '../../models/UserSerialNumber'

export const CreateSerialNumberController = async (req: Req, res: Res) => {
  const { role, districtId, notes } = req.body
  if (!role || !districtId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide all required fields'
    })
    return
  }

  if(role === Role.dev) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Role is invalid, cannot create serial number with dev role'
    })
    return
  }

  if (role === Role.admin && req.user?.role !== Role.dev) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Only Role.dev can create a serial number with admin role'
    })
    return
  }

  const findDistrict = await District.findById(districtId)
  if(!findDistrict) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'District not found'
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
}