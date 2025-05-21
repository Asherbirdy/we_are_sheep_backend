import mongoose, { Schema } from 'mongoose'

interface MeetingCenter {
  districtName: string
  name: string
  identity: string
  departure: string
  returnRide: string
  notes: string
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
  returnRide: {
    type: String,
  },
  notes: {
    type: String,
  },
}, { timestamps: true })

export const MeetingCenter = mongoose.model<MeetingCenter>('MeetingCenter', MeetingCenterSchema)
