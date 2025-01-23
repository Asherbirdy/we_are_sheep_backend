import { AgeRange, PersonStatus, FocusPerson } from '../../enums'
import { IDistrict } from './IDistrict'
import { IUser } from './IUser'

export interface ISheep {
  name: string
  ageRange: AgeRange
  weekInviteTag: string[]
  district: IDistrict
  focusPerson: FocusPerson
  userId: IUser
  personStatus: PersonStatus
  note: string
}