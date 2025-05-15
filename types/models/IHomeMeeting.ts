import { IDistrict } from './IDistrict'
import { IAttendanceAccount } from './IAttendanceAccount'

export interface IHomeMeeting {
  groupName: string
  attendanceAccount: IAttendanceAccount
  district: IDistrict
  lastAttendanceDate: Date
}