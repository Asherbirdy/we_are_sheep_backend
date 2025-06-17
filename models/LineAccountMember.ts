import mongoose, { Schema } from 'mongoose'
import { ILineAccountMember } from '../types'

const LineAccountMemberSchema: Schema<ILineAccountMember> = new mongoose.Schema({
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
  districtId: {
    type: Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export const LineAccountMember = mongoose.model<ILineAccountMember>(
  'LineAccountMember', LineAccountMemberSchema
) 