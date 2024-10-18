import { Document } from 'mongoose'
import { IDistrict } from './IDistrict'
import { Identity, MeetingStatus } from '../../enums'
import { IUser } from './IUser'

export interface IMember extends Document {
  name: string
  district: IDistrict
  identity: Identity
  active: boolean
  meetingStatus: MeetingStatus
  createdBy: IUser
}