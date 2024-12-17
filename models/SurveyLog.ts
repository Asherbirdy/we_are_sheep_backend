import mongoose, { Schema } from 'mongoose'
interface ISurveyLog {
  ip: string
  createdAt: Date
}
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