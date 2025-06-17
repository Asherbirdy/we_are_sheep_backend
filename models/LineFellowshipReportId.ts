import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

export interface ILineFellowshipReportId {
  name: string
  info: string
  createBy: IUser
  expiredTime: Date
}

const LineFellowshipReportIdSchema: Schema<ILineFellowshipReportId> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  expiredTime: {
    type: Date,
    required: true
  }
}, { timestamps: true })

export const LineFellowshipReportId = mongoose.model<ILineFellowshipReportId>(
  'LineFellowshipReportId', LineFellowshipReportIdSchema
)
