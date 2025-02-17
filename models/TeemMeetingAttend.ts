import mongoose, { Schema } from 'mongoose'

interface ITeemMeetingAttend {
  district: string
  name: string
  ageRange: string
  gender: string
  meetingStatus: string
  sheepherd: string
  inviteList: string
  participation: string
}

export enum AgeRange {
  'none' = '未選擇',
  'youth' = '青職',
  'college' = '大專',
  'teenager' = '青少年',
  'other' = '其他',
  'child1' = '兒童-幼兒園',
  'child2' = '兒童-低年級',
  'child3' = '兒童-高年級',
}

export enum Gender {
  'none' = '未選擇',
  'male' = '男',
  'female' = '女',
}
export enum Participation {
  'none' = '未選擇',
  'both' = '兩天都參加',
  'only329' = '只參加3/29特會',
  'only330' = '只參加3/30主日',
}

export enum MeetingStatus {
  'none' = '未選擇',
  'has' = '已有聚會',
  'long' = '久不聚會',
  'gospel' = '福音朋友',
}


export enum District {
  'none' = '未選擇',
  'one' = '一區',
  'two' = '二區',
  'three' = '三區',
  'four' = '四區',
}

const TeemMeetingAttendSchema: Schema<ITeemMeetingAttend> = new Schema({
  district: {
    type: String,
    enum: [
      District.none,
      District.one,
      District.two,
      District.three,
      District.four,
    ],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  ageRange: {
    type: String,
    enum: [
      AgeRange.none,
      AgeRange.youth,
      AgeRange.college,
      AgeRange.teenager,
      AgeRange.other,
      AgeRange.child1,
      AgeRange.child2,
      AgeRange.child3,
    ],
    required: true
  },
  gender: {
    type: String,
    enum: [
      Gender.none,
      Gender.male,
      Gender.female,
    ],
    required: true
  },
  participation: {
    type: String,
    enum: [
      Participation.none,
      Participation.both,
      Participation.only329,
      Participation.only330,
    ],
    required: true
  },
  meetingStatus: {
    type: String,
    enum: [
      MeetingStatus.none,
      MeetingStatus.has,
      MeetingStatus.long,
      MeetingStatus.gospel,
    ],
    required: true
  },
  sheepherd: {
    type: String,
    required: true
  },
  inviteList: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

export const TeemMeetingAttend = mongoose.model('TeemMeetingAttend', TeemMeetingAttendSchema)