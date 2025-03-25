import mongoose, { Schema } from 'mongoose'
import { IGroup } from '../types'

const GroupSchema: Schema<IGroup> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '無'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export const Group = mongoose.model<IGroup>('Group', GroupSchema)
