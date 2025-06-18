import { ILineFellowshipReport } from '../../models/LineFellowshipReport'
import { ILineAccountMember } from './ILineAccountMember'

export interface IFellowshipRecord {
  lineAccountMemberId: ILineAccountMember
  lineFellowshipReportId: ILineFellowshipReport
  hasMorningRevival: boolean
  homeMeetingGroup: IHomeMeetingGroup[]
}

interface IHomeMeetingGroup {
  name: string[]
  info: string
}