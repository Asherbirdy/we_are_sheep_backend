import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { District } from '../../models/District'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const CreateLineAccountMemberController = async (req: Req, res: Res) => {
  const { name, serialNumber, districtId } = req.body

  if (!name || !serialNumber || !districtId) {
    throw new BadRequestError('NAME_SERIAL_NUMBER_DISTRICT_ID_REQUIRED')
  }

  // find name exist
  const nameExist = await LineAccountMember.findOne({ name })
  if (nameExist) {
    throw new BadRequestError('NAME_ALREADY_EXIST')
  }

  const district = await District.findById(districtId)
  if (!district) {
    throw new BadRequestError('DISTRICT_NOT_FOUND')
  }

  // find serial number exist
  const serialNumberExist = await LineAccountMember.findOne({ serialNumber })
  if (serialNumberExist) {
    throw new BadRequestError('SERIAL_NUMBER_ALREADY_EXIST')
  }

  const attendanceAccount = await LineAccountMember.create({
    name,
    serialNumber,
    serialNumberExpiredDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    active: false,
    districtId
  })

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account created',
    data: attendanceAccount
  })
}