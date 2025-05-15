import { IDistrict } from './IDistrict'
import { IAttendanceAccount } from './IAttendanceAccount'
import { ISheep } from './ISheep'
export interface IHomeMeeting {
  groupName: string
  attendanceAccount: IAttendanceAccount
  district: IDistrict
  lastAttendanceDate: Date
  meetingPeople: ISheep[]
}