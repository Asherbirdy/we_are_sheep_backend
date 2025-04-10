import mongoose, { Schema } from 'mongoose'

interface ILandingPage {
  title: string
  description: string
  isCustom: boolean
  customLayoutName: string
  html: string
  updatedBy: string
  isActive: boolean
}

const LandingPageSchema: Schema<ILandingPage> = new mongoose.Schema({
  title: {
    type: String,
    default: '未命名'
  },
  description: {
    type: String,
    default: ''
  },
  isCustom: {
    type: Boolean,
    default: false
  },
  customLayoutName: {
    type: String,
    default: ''
  },
  html: {
    type: String,
    default: ''
  },
  updatedBy: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  },
}, { timestamps: true })

export const LandingPage = mongoose.model<ILandingPage>('LandingPage', LandingPageSchema)
