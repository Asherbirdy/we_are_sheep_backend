import { Role } from '../../enums'
import { IDistrict } from './IDistrict'
import { IUser } from './IUser'

export interface IUserSerialNumber {
  serialNumber: string
  isUsed: boolean
  role: Role
  districtid: IDistrict
  createByUser: IUser
  note: string
}