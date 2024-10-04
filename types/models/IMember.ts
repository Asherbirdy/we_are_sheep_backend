import { Document } from 'mongoose'
import { IDistrict } from './IDistrict'
import { Identity } from '../../enums'

export interface IMember extends Document {
  name: string
  district: IDistrict
  identity: Identity
  active: boolean
}