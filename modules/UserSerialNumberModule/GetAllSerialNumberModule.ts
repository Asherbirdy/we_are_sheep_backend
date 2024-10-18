import { StatusCodes } from '../../enums'
import { District } from '../../models/District'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'

export const GetAllSerialNumberModule = async (req: Req, res: Res) => {
  const userSerialNumber = await UserSerialNumber.find({}).populate({
    path: 'districtId',
    model: District,
  })
  res.status(StatusCodes.OK).json({
    msg: 'Get all user serial number',
    userSerialNumber
  })
}