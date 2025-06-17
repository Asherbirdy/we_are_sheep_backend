import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const CreateLineAccountMemberController = async (req: Req, res: Res) => {
  const { name, serialNumber} = req.body

  if (!name || !serialNumber) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'Name and serial number are required',
    })
    return
  }

  // find name exist
  const nameExist = await LineAccountMember.findOne({ name })
  if (nameExist) {
    throw new BadRequestError('NAME_ALREADY_EXIST')
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
    active: false
  })

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account created',
    data: attendanceAccount
  })
}