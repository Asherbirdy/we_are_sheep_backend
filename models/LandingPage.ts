import mongoose, { Schema } from 'mongoose'

interface ILandingPage {
  title: string
  description: string
  urlPathId: string
  isCustom: boolean
  isActive: boolean
  html: string
  updatedBy: mongoose.Schema.Types.ObjectId
  lastEditVisited: Date
  lastEditVisitedUser: mongoose.Schema.Types.ObjectId
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
  // 網址 怎麼樣都不能改變或刪掉
  urlPathId: {
    type: String,
    unique: true
  },
  // 抓 urlPathId 去 顯示對應的 html
  isCustom: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  html: {
    type: String,
    default: ''
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  lastEditVisited: {
    type: Date,
    default: null
  },
  lastEditVisitedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, { timestamps: true })

export const LandingPage = mongoose.model<ILandingPage>('LandingPage', LandingPageSchema)
