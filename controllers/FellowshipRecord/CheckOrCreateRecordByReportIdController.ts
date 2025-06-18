import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { LineAccountMember } from '../../models/LineAccountMember'
import { LineFellowshipReport } from '../../models/LineFellowshipReport'
import { FellowshipRecord } from '../../models/FellowshipRecord'
import { Req, Res } from '../../types'

export const CheckOrCreateRecordByReportIdController = async (req: Req, res: Res) => {
  const { 
    lineAccountMemberId, // line account member _id 
    lineFellowshipReportId, // 回報群組 id
  } = req.body

  if (!lineAccountMemberId || !lineFellowshipReportId) {
    throw new BadRequestError('ALL_FIELDS_REQUIRED')
  }

  // 確認是否已經有紀錄
  const checkExistingLineFellowshipRecord = await FellowshipRecord.findOne({
    lineFellowshipReportId,
    lineAccountMemberId
  })

  // 如果已經有紀錄，則返回紀錄
  if (checkExistingLineFellowshipRecord) {
    res.status(StatusCodes.OK).json({
      msg: '已經有紀錄',
      code: 'LINE_FELLOWSHIP_RECORD_ALREADY_EXISTS',
      data: checkExistingLineFellowshipRecord
    })
    return
  }

  // 確認lineAccountMember是否存在
  const lineAccountMember = await LineAccountMember.findById(lineAccountMemberId)

  if (!lineAccountMember) {
    throw new BadRequestError('LINE_ACCOUNT_MEMBER_NOT_FOUND')
  }

  // 確認lineFellowshipReport回報id是否存在
  const lineFellowshipReport = await LineFellowshipReport.findById(lineFellowshipReportId)
  if (!lineFellowshipReport) {
    throw new BadRequestError('LINE_FELLOWSHIP_REPORT_NOT_FOUND')
  }

  // 確認回報id是否過期
  if (lineFellowshipReport.expiredTime < new Date()) {
    throw new BadRequestError('LINE_FELLOWSHIP_REPORT_HAS_ENDED')
  }

  // 如果沒有紀錄，創建
  const lineFellowshipRecord = await FellowshipRecord.create({
    lineAccountMemberId,
    lineFellowshipReportId,
  })

  res.status(StatusCodes.OK).json({
    msg: '無紀錄，創建成功',
    code: 'LINE_FELLOWSHIP_RECORD_CREATED',
    lineFellowshipRecord
  })
}