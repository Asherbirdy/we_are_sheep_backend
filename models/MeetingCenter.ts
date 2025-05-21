import mongoose, { Schema } from 'mongoose'

interface MeetingCenter {
  districtName: string
  name: string
  identity: string
  departure: string
  return: string
  note: string
}

const MeetingCenterSchema: Schema<MeetingCenter> = new mongoose.Schema({
  districtName: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  identity: {
    type: String,
  },
  departure: {
    type: String,
  },
  return: {
    type: String,
  },
  note: {
    type: String,
  },
}, { timestamps: true })

export const MeetingCenter = mongoose.model<MeetingCenter>('MeetingCenter', MeetingCenterSchema)
