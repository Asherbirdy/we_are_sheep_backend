import { IHomeMeeting } from './IHomeMeeting'
import { IHomeMeetingRecordId } from './IHomeMeetingRecordId'

import { ISheep } from './ISheep'

export interface IHomeMeetingRecord {
  homeMeetingId: IHomeMeeting
  sheepId: ISheep
  homeMeetingRecordId: IHomeMeetingRecordId
  status: 'yes' | 'no' | 'noReply',
  type: 'schedule' | 'temporary'
}