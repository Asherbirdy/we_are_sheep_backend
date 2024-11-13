import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

interface ILog {
  date: Date
  controller: string // 控制器
  document: string // 資料庫
  action: 'get' | 'create' | 'update' | 'delete' // 新增、修改、刪除
  success: boolean // 是否成功
  userId: IUser
}

const LogSchema: Schema<ILog> = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  controller: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export const Log = mongoose.model<ILog>('Log', LogSchema)