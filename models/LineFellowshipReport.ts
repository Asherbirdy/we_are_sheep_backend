import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

export interface ILineFellowshipReport {
  name: string
  info: string
  createBy: IUser
  expiredTime: Date
  recordWeekSundayDate: Date
}

const LineFellowshipReportSchema: Schema<ILineFellowshipReport> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recordWeekSundayDate: {
    type: Date,
    required: true
  },
  expiredTime: {
    type: Date,
    required: true
  }
}, { timestamps: true })

export const LineFellowshipReport = mongoose.model<ILineFellowshipReport>(
  'LineFellowshipReport', LineFellowshipReportSchema
)
