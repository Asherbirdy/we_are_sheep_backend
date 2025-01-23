import { IUser } from './IUser'

export interface IFriendList {
  userId: IUser
  friendUserId: IUser
  favorite: boolean
}
