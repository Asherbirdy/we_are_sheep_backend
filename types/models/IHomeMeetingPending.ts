import { IHomeMeeting } from './IHomeMeeting'

import { ISheep } from './ISheep'

export interface IHomeMeetingPending {
  homeMeetingId: IHomeMeeting
  sheepId: ISheep
  recordDate: string
  status: 'yes' | 'no' | 'noReply',
  type: 'schedule' | 'temporary'
}