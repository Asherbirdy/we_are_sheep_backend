import { Document } from 'mongoose'
import { Role } from '../../enums'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: Role
  // member: IMember
  // eslint-disable-next-line no-unused-vars
  comparePassword(candidatePassword: string): Promise<boolean>;
}