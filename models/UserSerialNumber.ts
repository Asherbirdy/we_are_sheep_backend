import mongoose, { Schema } from 'mongoose'
import { Role } from '../enums'
import { IUserSerialNumber } from '../types'

const UserSerialNumberSchema: Schema<IUserSerialNumber> = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true
  },
  isUsed: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: Object.values(Role),
    required: true
  },
  districtid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  createByUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  note: {
    type: String,
    default: ''
  }
}, { timestamps: true })

export const UserSerialNumber = mongoose.model<IUserSerialNumber>('UserSerialNumber', UserSerialNumberSchema)