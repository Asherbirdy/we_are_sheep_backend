import mongoose, { Schema } from 'mongoose'
import { ISurveyLog } from '../types'
const SurveyLogSchema: Schema<ISurveyLog> = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const SurveyLog = mongoose.model<ISurveyLog>('SurveyLog', SurveyLogSchema)