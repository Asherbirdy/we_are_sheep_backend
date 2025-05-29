import mongoose, { Schema } from 'mongoose'
import { IHomeMeetingPerson } from '../types'

const HomeMeetingPersonSchema: Schema<IHomeMeetingPerson> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  attendanceAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AttendanceAccount',
  },
}, { timestamps: true })

export const HomeMeeting = mongoose.model<IHomeMeetingPerson>('HomeMeetingPerson', HomeMeetingPersonSchema)
