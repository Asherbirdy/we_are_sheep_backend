import { AgeRange, PersonStatus, FocusPerson, Identity } from '../../enums'
import { IDistrict } from './IDistrict'
import { IUser } from './IUser'
import { ILineAccountMember } from './ILineAccountMember'

export interface ISheep {
  name: string
  identity: Identity
  ageRange: AgeRange
  attendanceAccount: ILineAccountMember
  weekInviteTag: string[]
  district: IDistrict
  focusPerson: FocusPerson
  userId: IUser
  personStatus: PersonStatus
  note: string
}