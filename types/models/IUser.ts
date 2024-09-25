import { Document } from 'mongoose'
import { Role } from '../../enums'
import { IDistrict } from './IDistrict'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: Role
  district: IDistrict | null
  // eslint-disable-next-line no-unused-vars
  comparePassword(candidatePassword: string): Promise<boolean>;
}