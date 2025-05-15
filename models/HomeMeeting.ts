import mongoose, { Schema } from 'mongoose'

interface IHomeMeeting {
  name: string
}

const HomeMeetingSchema: Schema<IHomeMeeting> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const HomeMeeting = mongoose.model<IHomeMeeting>('HomeMeeting', HomeMeetingSchema)
