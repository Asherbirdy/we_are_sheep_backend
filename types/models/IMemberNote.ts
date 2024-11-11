import { IDistrict } from './IDistrict'
import { IMember } from './IMember'
import { IUser } from './IUser'
export interface IMemberNote {
  districtId: IDistrict
  memberId: IMember
  createdBy: IUser
  content: string
  createdAt: Date
}
