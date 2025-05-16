import mongoose, { Schema } from 'mongoose'
import { IHomeMeetingPending } from '../types'

const HomeMeetingPendingSchema: Schema<IHomeMeetingPending> = new mongoose.Schema({
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
  recordDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
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

export const HomeMeetingPending = mongoose.model<IHomeMeetingPending>(
  'HomeMeetingPending', 
  HomeMeetingPendingSchema
)
