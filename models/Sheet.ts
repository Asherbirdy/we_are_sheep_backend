import mongoose, { Schema } from 'mongoose'
import { ISheet } from '../types'

const SheetSchema: Schema<ISheet> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  api: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, { timestamps: true })

export const Sheet = mongoose.model<ISheet>('Sheet', SheetSchema)
