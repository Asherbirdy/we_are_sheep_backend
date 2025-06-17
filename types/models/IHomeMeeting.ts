import { IDistrict } from './IDistrict'
import { ILineAccountMember } from './ILineAccountMember'
import { ISheep } from './ISheep'
export interface IHomeMeeting {
  groupName: string
  attendanceAccount: ILineAccountMember
  district: IDistrict
  lastAttendanceDate: Date
  meetingPeople: ISheep[]
}