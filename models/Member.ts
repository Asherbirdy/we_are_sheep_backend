import mongoose, { Schema } from 'mongoose'
import { IMember } from '../types'
import { Identity } from '../enums'

const MemberSchema: Schema<IMember> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  district: {
    type: Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  identity: {
    type: String,
    enum: Identity,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
}, 
{ timestamps: true }
)

export const Member = mongoose.model<IMember>('Member', MemberSchema)