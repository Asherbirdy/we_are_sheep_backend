import { ILineFellowshipReportId } from '../../models/LineFellowshipReportId'
import { ILineAccountMember } from './ILineAccountMember'

export interface IFellowshipRecord {
  lineAccountMemberId: ILineAccountMember
  lineFellowshipReportId: ILineFellowshipReportId
  hasMorningRevival: boolean
  homeMeetingGroup: IHomeMeetingGroup[]
}

interface IHomeMeetingGroup {
  name: string[]
  info: string
}