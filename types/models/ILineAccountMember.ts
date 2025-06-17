import { IDistrict } from './IDistrict'

export interface ILineAccountMember {
  name: string
  serialNumber: string
  serialNumberExpiredDate: Date
  lineProfileId: string
  active: boolean
  districtId: IDistrict
}
