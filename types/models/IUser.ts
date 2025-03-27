import { Document, Types } from 'mongoose'
import { LandingPageAccess, Role } from '../../enums'
import { IDistrict } from './IDistrict'

export interface IUser extends Document {
  name: string
  email: string
  emailVerified: boolean
  OTP: string | undefined
  OTPCreatedTime: Date | undefined
  OTPAttempts: number
  isBlocked: boolean
  blockUntil: Date
  password: string
  role: Role
  district: IDistrict
  groups: Types.ObjectId[]
  leaderOfGroupIds: Types.ObjectId[]
  landingPageAccess: LandingPageAccess
  // eslint-disable-next-line no-unused-vars
  comparePassword(candidatePassword: string): Promise<boolean>;
}