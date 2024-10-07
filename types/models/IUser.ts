import { Document } from 'mongoose'
import { Role } from '../../enums'
import { IMember } from './IMember'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: Role
  member: IMember
  // eslint-disable-next-line no-unused-vars
  comparePassword(candidatePassword: string): Promise<boolean>;
}