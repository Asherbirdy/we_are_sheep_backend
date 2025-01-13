import { IUser } from './IUser'

export interface ISheep {
  name: string
  ageRange: string
  tags: string[]
  forcusPerson: boolean
  userId: IUser
}