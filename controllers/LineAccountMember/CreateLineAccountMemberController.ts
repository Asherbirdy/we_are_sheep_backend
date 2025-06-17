import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { District } from '../../models/District'
import { LineAccountMember } from '../../models/LineAccountMember'
import { Req, Res } from '../../types'

export const CreateLineAccountMemberController = async (req: Req, res: Res) => {
  const { name, districtId, lineProfileId } = req.body

  if (!name || !districtId || !lineProfileId) {
    throw new BadRequestError('NAME_DISTRICT_ID_LINE_PROFILE_ID_REQUIRED')
  }

  // find line profile id exist
  const lineProfileIdExist = await LineAccountMember.findOne({ lineProfileId })
  if (lineProfileIdExist) {
    throw new BadRequestError('LINE_PROFILE_ID_ALREADY_EXIST')
  }

  const district = await District.findById(districtId)
  if (!district) {
    throw new BadRequestError('DISTRICT_NOT_FOUND')
  }

  const attendanceAccount = await LineAccountMember.create({
    name,
    lineProfileId,
    active: false,
    districtId
  })

  res.status(StatusCodes.OK).json({
    msg: 'Attendance account created',
    data: attendanceAccount
  })
}