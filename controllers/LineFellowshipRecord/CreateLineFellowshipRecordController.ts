import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { LineFellowshipReportId } from '../../models/LineFellowshipReportId'
import { LineFellowshipRecord } from '../../models/LineFellowshipRecord'
import { Req, Res } from '../../types'

export const CreateLineFellowshipRecordController = async (req: Req, res: Res) => {
  const { 
    lineAccountMemberId, // line Id 
    lineFellowshipReportId, // 回報群組 id
    hasMorningRevival, 
    homeMeetingGroup, // 家聚會回報
  } = req.body

  if (!lineAccountMemberId || !lineFellowshipReportId) {
    throw new BadRequestError('ALL_FIELDS_REQUIRED')
  }

  // 確認是否已經有紀錄
  const checkExistingLineFellowshipRecord = await LineFellowshipRecord.findById(lineFellowshipReportId)
  if (checkExistingLineFellowshipRecord) {
    throw new BadRequestError('LINE_FELLOWSHIP_RECORD_ALREADY_EXISTS')
  }

  // 確認lineAccountMember是否存在
  const lineAccountMember = await LineAccountMember.findById(lineAccountMemberId)

  if (!lineAccountMember) {
    throw new BadRequestError('LINE_ACCOUNT_MEMBER_NOT_FOUND')
  }

  // 確認lineFellowshipReport回報id是否存在
  const lineFellowshipReport = await LineFellowshipReportId.findById(lineFellowshipReportId)
  if (!lineFellowshipReport) {
    throw new BadRequestError('LINE_FELLOWSHIP_REPORT_NOT_FOUND')
  }

  const lineFellowshipRecord = await LineFellowshipRecord.create({
    lineAccountMemberId,
    lineFellowshipReportId,
    hasMorningRevival,
    homeMeetingGroup
  })

  res.status(StatusCodes.OK).json({
    msg: 'Record fetched successfully',
    lineFellowshipRecord
  })
}