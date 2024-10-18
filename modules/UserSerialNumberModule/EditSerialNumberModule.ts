import { StatusCodes } from '../../enums'
import { District } from '../../models/District'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'

export const EditSerialNumberModule = async (req: Req, res: Res) => {
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
}
