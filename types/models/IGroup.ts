import { Document, Types } from 'mongoose'

export interface IGroup extends Document {
  name: string
  description: string
  createdBy: Types.ObjectId
}