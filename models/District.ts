import mongoose, { Document, Schema } from 'mongoose'
import { IDistrict } from '../types'
const DistrictSchema: Schema<IDistrict> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
})

export const District = mongoose.model<IDistrict>('District', DistrictSchema)