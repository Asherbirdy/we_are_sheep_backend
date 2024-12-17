import mongoose, { Schema } from 'mongoose'
import { ISurvey } from '../types'

const SurveySchema: Schema<ISurvey> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ageRange: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => /^\d{1,2}-\d{1,2}$/.test(value), // 驗證年齡範圍格式必須為 xx-xx
      message: '年齡範圍格式必須為 xx-xx'
    }
  },
  userNotes: {
    type: String,
  },
  contact: {
    type: String,
    required: true
  },
  survey: {
    type: [{
      question: String,
      answer: String
    }],
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  ip: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const Survey = mongoose.model<ISurvey>('Survey', SurveySchema)