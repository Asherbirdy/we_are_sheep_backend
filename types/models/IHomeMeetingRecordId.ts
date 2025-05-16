import { IUser } from './IUser'

export interface IHomeMeetingRecordId {
  name: string
  info: string
  createBy: IUser
  expiredTime: Date
}