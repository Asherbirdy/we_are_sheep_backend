import { Role, StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { UserSerialNumber } from '../../models/UserSerialNumber'
import { Req, Res } from '../../types'  
import { v4 as uuidv4 } from 'uuid'
export const DistrictLeaderCreateUserSerialController = async (req: Req, res: Res) => {

  const { notes } = req.body

  if (!notes) {
    throw new BadRequestError('FIELD_REQUIRED')
  }

  // 只能產生 10 個
  const findAllSerialNumber = await UserSerialNumber.find({
    createByUser: req.user?.userId
  })

  if (findAllSerialNumber.length >= 10) {
    throw new BadRequestError('CAN_ONLY_CREATE_10_SERIAL_NUMBER')
  }

  const serialNumber = await UserSerialNumber.create({
    serialNumber: uuidv4(),
    role: Role.user,
    districtId: req.user?.districtId,
    notes,
    createByUser: req.user?.userId
  })

  res.status(StatusCodes.OK).json({
    msg: 'District leader serial number created',
    serialNumber
  })
}
