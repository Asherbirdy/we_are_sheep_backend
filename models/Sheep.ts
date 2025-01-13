import mongoose, { Schema } from 'mongoose'
import { ISheep } from '../types'
import { AgeRange } from '../enums'
const SheepSchema: Schema<ISheep> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ageRange: {
    type: String,
    enum: [
      AgeRange.teenager,
      AgeRange.college,
      AgeRange.youth,
      AgeRange.middleAge,
      AgeRange.elder
    ],
    required: true
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: (value: string[]) => value.every((tag) => tag.length <= 5),
      message: '每個 tag 最多只能有五個字'
    }
  },
  forcusPerson: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export const Sheep = mongoose.model<ISheep>('Sheep', SheepSchema)
