import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types'

interface IBlending {
  district: string
  name: string
  ageRange: string
  gender: string
  identity: string
  notes: string
  inviteList: string
  editedBy: IUser
  editedAt: Date
}
const BlendingSchema: Schema<IBlending> = new mongoose.Schema({
  district: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  ageRange: {
    type: String,
  },
  gender: {
    type: String,
  },
  identity: {
    type: String,
  },
  notes: {
    type: String,
  },
  inviteList: {
    type: String,
  },
  editedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  editedAt: {
    type: Date,
  },
}, { timestamps: true })

export const Blending = mongoose.model<IBlending>('Blending', BlendingSchema)