import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

interface ISurveyQuestion {
  question: string
  active: boolean
  createdBy: IUser
}

const SurveyQuestionSchema: Schema<ISurveyQuestion> = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export const SurveyQuestion = mongoose.model<ISurveyQuestion>('SurveyQuestion', SurveyQuestionSchema)