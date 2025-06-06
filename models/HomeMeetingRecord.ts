import mongoose, { Schema } from 'mongoose'
import { IHomeMeetingRecord } from '../types'

const HomeMeetingRecordSchema: Schema<IHomeMeetingRecord> = new mongoose.Schema({
  homeMeetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HomeMeeting',
    required: true
  },
  sheepId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sheep',
    required: true
  },
  homeMeetingRecordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HomeMeetingRecordId',
    required: true
  },
  status: {
    type: String,
    enum: [
      'yes',
      'no',
      'noReply'
    ],
    required: true
  },
  type: {
    type: String,
    enum: [
      'schedule',
      'temporary'
    ],
    required: true
  }
}, { timestamps: true })

export const HomeMeetingRecord = mongoose.model<IHomeMeetingRecord>(
  'HomeMeetingRecord', 
  HomeMeetingRecordSchema
)
