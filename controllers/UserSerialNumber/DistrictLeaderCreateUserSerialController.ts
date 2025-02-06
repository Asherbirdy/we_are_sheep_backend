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
