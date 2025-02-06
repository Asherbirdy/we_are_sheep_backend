import { StatusCodes } from '../../enums'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'

export const GetLeaderSerialNumberController = async (req: Req, res: Res) => {
  const findAllSerialNumber = await UserSerialNumber.find({
    createByUser: req.user?.userId
  })
  res.status(StatusCodes.OK).json({
    msg: 'Leader serial number fetched',
    data: findAllSerialNumber
  })
} 
