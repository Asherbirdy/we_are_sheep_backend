import mongoose, { Schema } from 'mongoose'

interface Answer {
  question: string
  answer: string
}

interface ISurvey {
  name: string
  ageRange: string
  contact: string
  answers: Answer[]
  createdDate: Date
  ip: string
}

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
  contact: {
    type: String,
    required: true
  },
  answers: {
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