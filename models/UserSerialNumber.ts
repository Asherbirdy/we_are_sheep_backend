import mongoose, { Schema } from 'mongoose'
import { IUser, IMember } from '../types'

interface IUserSerialNumber {
  serialNumber: string
  isUsed: boolean
  bindMember: IMember
  createByUser: IUser
}

const UserSerialNumberSchema: Schema<IUserSerialNumber> = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true
  },
  isUsed: {
    type: Boolean,
    default: false
  },
  bindMember: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  createByUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export const UserSerialNumber = mongoose.model<IUserSerialNumber>('UserSerialNumber', UserSerialNumberSchema)