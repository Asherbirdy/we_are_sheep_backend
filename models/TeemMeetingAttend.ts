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

const TeemMeetingAttendSchema: Schema<ITeemMeetingAttend> = new Schema({
  district: {
    type: String,
    enum: [
      '未選擇',
      '一區',
      '二區',
      '三區',
      '四區',
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
      '未選擇',
      '青職',
      '大專',
      '青少年',
      '其他',
      '兒童-幼兒園',
      '兒童-低年級',
      '兒童-高年級',
    ],
    required: true
  },
  gender: {
    type: String,
    enum: [
      '未選擇',
      '男',
      '女',
    ],
    required: true
  },
  participation: {
    type: String,
    enum: [
      '未選擇',
      '兩天都參加',
      '只參加3/30主日',
    ],
    required: true
  },
  meetingStatus: {
    type: String,
    enum: [
      '未選擇',
      '已有聚會',
      '久不聚會',
      '福音朋友',
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