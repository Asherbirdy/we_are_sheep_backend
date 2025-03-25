import mongoose, { Schema } from 'mongoose'
import { SheetType } from '../enums/SheetType'
import { ISheet } from '../types'

const SheetSchema: Schema<ISheet> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: [SheetType],
    enum: [
      SheetType.districtSheep,
      SheetType.activity
    ],
    required: true
  },
  url: {
    type: String,
  },
  api: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, { timestamps: true })

export const Sheet = mongoose.model<ISheet>('Sheet', SheetSchema)
