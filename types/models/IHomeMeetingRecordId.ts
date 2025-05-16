import { IUser } from './IUser'

export interface IHomeMeetingRecordId {
  name: string
  info: string
  createTime: Date
  createBy: IUser
  expiredTime: Date
}