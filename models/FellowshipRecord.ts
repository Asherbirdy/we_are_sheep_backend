import mongoose, { Schema } from 'mongoose'
import { ILineAccountMember } from '../types'
import { ILineFellowshipReportId } from './LineFellowshipReportId'

export interface IFellowshipRecord {
  lineAccountMemberId: ILineAccountMember
  lineFellowshipReportId: ILineFellowshipReportId
  hasMorningRevival: boolean
  homeMeetingGroup: IHomeMeetingGroup[]
}

interface IHomeMeetingGroup {
  name: string[]
  info: string
}

const FellowshipRecordSchema: Schema<IFellowshipRecord> = new mongoose.Schema({
  lineAccountMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LineAccountMember',
    required: true
  },
  lineFellowshipReportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LineFellowshipReportId',
    required: true
  },
  hasMorningRevival: {
    type: Boolean,
    required: true,
    default: false
  },
  homeMeetingGroup: {
    type: [{ name: [String], info: String }],
  }
}, { timestamps: true })

export const FellowshipRecord = mongoose.model<IFellowshipRecord>(
  'FellowshipRecord', FellowshipRecordSchema
)
