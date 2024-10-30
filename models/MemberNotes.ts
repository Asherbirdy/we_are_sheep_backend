import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

interface IMemberNote {
  createdBy: IUser
  content: string
  createdAt: Date
}

const MemberNoteSchema: Schema<IMemberNote> = new mongoose.Schema({
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
