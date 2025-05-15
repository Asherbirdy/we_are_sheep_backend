import mongoose, { Schema } from 'mongoose'

interface IAttendanceAccount {
  name: string
  serialNumber: string
  serialNumberExpiredDate: Date
  lineProfileId: string
  active: boolean
}

const AttendanceAccountSchema: Schema<IAttendanceAccount> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  serialNumber: {
    type: String, 
    required: true
  },
  serialNumberExpiredDate: {
    type: Date,
    required: true
  },
  lineProfileId: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export const AttendanceAccount = mongoose.model<IAttendanceAccount>('AttendanceAccount', AttendanceAccountSchema) 