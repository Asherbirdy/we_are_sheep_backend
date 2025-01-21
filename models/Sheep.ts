import mongoose, { Schema } from 'mongoose'
import { ISheep } from '../types'
import { AgeRange, PersonStatus, FocusPerson } from '../enums'
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
    required: true,
  },
  tags: {
    type: [String],
    validate: {
      validator: (value: string[]) => value.every((tag) => tag.length <= 5),
      message: '每個 tag 最多只能有五個字'
    }
  },
  focusPerson: {
    type: String,
    enum: [
      FocusPerson.isFocus,
      FocusPerson.notFocus
    ],
    default: FocusPerson.notFocus
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  personStatus: {
    type: String,
    enum: [
      PersonStatus.none,
      PersonStatus.normal,
      PersonStatus.longTimeNoSee,
      PersonStatus.gospelfriend
    ],
    default: PersonStatus.none
  },
  note: {
    type: String,
    default: ''
  }
}, { timestamps: true })

export const Sheep = mongoose.model<ISheep>('Sheep', SheepSchema)
