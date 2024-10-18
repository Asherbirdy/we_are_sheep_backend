import mongoose, { Schema } from 'mongoose'
import { IMember } from '../types'
import { Identity, MeetingStatus } from '../enums'

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
  meetingStatus: {
    type: String,
    enum: MeetingStatus,
    default: MeetingStatus.D_member
  },
  active: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, 
{ timestamps: true }
)

export const Member = mongoose.model<IMember>('Member', MemberSchema)