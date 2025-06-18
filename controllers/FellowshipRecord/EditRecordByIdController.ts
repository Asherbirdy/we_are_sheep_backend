import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { FellowshipRecord } from '../../models/FellowshipRecord'
import { Req, Res } from '../../types'

export const EditRecordByIdController = async (req: Req, res: Res) => {
  const { fellowshipRecordId, hasMorningRevival, homeMeetingGroup } = req.body

  if(!fellowshipRecordId || !homeMeetingGroup) {
    throw new BadRequestError('ALL_FIELDS_ARE_REQUIRED')
  }

  const fellowshipRecord = await FellowshipRecord.findById(
    fellowshipRecordId
  )

  if (!fellowshipRecord) {
    throw new BadRequestError('FELLOWSHIP_RECORD_NOT_FOUND')
  }

  fellowshipRecord.hasMorningRevival = hasMorningRevival
  fellowshipRecord.homeMeetingGroup = homeMeetingGroup
  await fellowshipRecord.save()

  res.status(StatusCodes.OK).json({
    msg: '編輯成功',
    fellowshipRecord
  })
} 