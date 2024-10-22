import { Role, StatusCodes } from '../../enums'
import { District } from '../../models/District'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'

export const EditSerialNumberController = async (req: Req, res: Res) => {
  const {serialNumberId, role, districtId, notes} = req.body
  if(!serialNumberId || !role || !districtId ) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Please provide all required fields'
    })
    return
  }

  const userSerialNumber = await UserSerialNumber.findById(serialNumberId)
  if(!userSerialNumber) {
    res.status(StatusCodes.NOT_FOUND).json({
      msg: `User serial number with id ${ serialNumberId } not found`
    })
    return
  }

  if(role === Role.dev) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Role is invalid, cannot edit serial number with dev role'
    })
    return
  }

  if (role === Role.admin && req.user?.role !== Role.dev) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Only Role.dev can create a serial number with admin role'
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
}
