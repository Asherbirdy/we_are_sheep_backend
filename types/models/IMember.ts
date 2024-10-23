import { Document } from 'mongoose'
import { IDistrict } from './IDistrict'
import { Identity, MeetingStatus } from '../../enums'
import { IUser } from './IUser'

export interface IMember extends Document {
  name: string
  district: IDistrict
  identity: Identity
  meetingStatus: MeetingStatus
  createdBy: IUser
  notes: string[]
}