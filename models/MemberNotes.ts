import mongoose, { Schema } from 'mongoose'
import { IMemberNote } from '../types'

const MemberNoteSchema: Schema<IMemberNote> = new mongoose.Schema({
  districtId: {
    type: Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export const MemberNote = mongoose.model<IMemberNote>('MemberNote', MemberNoteSchema)
