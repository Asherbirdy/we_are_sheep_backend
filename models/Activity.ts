import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

interface IActivity {
  date: Date
  year: number
  month: number
  day: number
  title: string
  time: string
  content: string
  createdBy: IUser
  lastUpdatedBy: IUser
}
const ActivitySchema: Schema<IActivity> = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastUpdatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export const Activity = mongoose.model<IActivity>('Activity', ActivitySchema)