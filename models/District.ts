import mongoose, { Document, Schema } from 'mongoose'
interface IDistrict extends Document {
  name: string
  active: boolean
}
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