import mongoose, { Schema } from 'mongoose'
import { IHomeMeetingRecordId } from '../types'

const HomeMeetingRecordIdSchema: Schema<IHomeMeetingRecordId> = new mongoose.Schema({
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

export const HomeMeetingRecordId = mongoose.model<IHomeMeetingRecordId>(
  'HomeMeetingRecordId', HomeMeetingRecordIdSchema
)
