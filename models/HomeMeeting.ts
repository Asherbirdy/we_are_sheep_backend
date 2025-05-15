import mongoose, { Schema } from 'mongoose'
import { IHomeMeeting } from '../types/models/IHomeMeeting'

const HomeMeetingSchema: Schema<IHomeMeeting> = new mongoose.Schema({
  groupName: {
    type: String,
    required: true
  },
  attendanceAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AttendanceAccount',
  },
  meetingPeople: {
    type: [String],
    required: true
  }
}, { timestamps: true })

export const HomeMeeting = mongoose.model<IHomeMeeting>('HomeMeeting', HomeMeetingSchema)
