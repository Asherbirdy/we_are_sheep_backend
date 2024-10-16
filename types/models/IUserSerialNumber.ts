import { Role } from '../../enums'
import { IDistrict } from './IDistrict'
import { IUser } from './IUser'

export interface IUserSerialNumber {
  serialNumber: string
  isUsed: boolean
  role: Role
  districtId: IDistrict
  createByUser: IUser
  note: string
}