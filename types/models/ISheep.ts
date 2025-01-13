import { AgeRange } from '../../enums'
import { IUser } from './IUser'

export interface ISheep {
  name: string
  ageRange: AgeRange
  tags: string[]
  forcusPerson: boolean
  userId: IUser
}