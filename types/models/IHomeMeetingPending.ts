import { IHomeMeeting } from './IHomeMeeting'

import { ISheep } from './ISheep'

export interface IHomeMeetingRecord {
  homeMeetingId: IHomeMeeting
  sheepId: ISheep
  recordId: string
  recordDateNote: string
  status: 'yes' | 'no' | 'noReply',
  type: 'schedule' | 'temporary'
}