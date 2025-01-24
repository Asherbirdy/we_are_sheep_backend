import { AgeRange, PersonStatus, FocusPerson, Gender } from '../../enums'
import { IDistrict } from './IDistrict'
import { IUser } from './IUser'

export interface ISheep {
  name: string
  gender: Gender
  ageRange: AgeRange
  weekInviteTag: string[]
  district: IDistrict
  focusPerson: FocusPerson
  userId: IUser
  personStatus: PersonStatus
  note: string
}