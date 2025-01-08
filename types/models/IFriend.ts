import { IUser } from './IUser'

export interface IFriend {
  userId: IUser['_id']
  friendUserId: IUser['_id']
  status: 'pending' | 'accepted' | 'rejected' | 'blocked'
}
