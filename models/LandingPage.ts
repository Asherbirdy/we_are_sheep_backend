import mongoose, { Schema } from 'mongoose'

interface ILandingPage {
  title: string
  description: string
  urlPathId: string
  isCustom: boolean
  isCustomId: string
  isActive: boolean
  html: string
  updatedBy: string
  lastEditVisited: Date
  lastEditVisitedUser: string
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
  // 自定義 id
  isCustomId: {
    type: String,
    default: ''
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
    type: String,
    default: ''
  },
  lastEditVisited: {
    type: Date,
    default: null
  },
  lastEditVisitedUser: {
    type: String,
    default: ''
  }
}, { timestamps: true })

export const LandingPage = mongoose.model<ILandingPage>('LandingPage', LandingPageSchema)
