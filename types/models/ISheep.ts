import { AgeRange, PersonStatus, FocusPerson } from '../../enums'
import { IUser } from './IUser'

export interface ISheep {
  name: string
  ageRange: AgeRange
  tags: string[]
  focusPerson: FocusPerson
  userId: IUser
  personStatus: PersonStatus
  note: string
}