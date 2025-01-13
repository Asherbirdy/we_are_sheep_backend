import { AgeRange } from '../../enums'
import { IUser } from './IUser'

export interface ISheep {
  name: string
  ageRange: AgeRange
  tags: string[]
  focusPerson: boolean
  userId: IUser
  note: string
}