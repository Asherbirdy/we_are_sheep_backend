export enum Role {
  "dev" = "dev", // 開發者
  "admin" = "admin", // 管理者 子開發者
  "districtLeader" = "districtLeader", // 區域領導者
  "user" = "user" // 使用者
}

export const RoleList = {
  "admins": [Role.dev, Role.admin],
  "districtLeaders": [Role.dev, Role.admin, Role.districtLeader],
  "users": [Role.dev, Role.admin, Role.districtLeader, Role.user],
}


export enum Identity {
  "Male" = 'M',
  "Female" = 'F',
  "Brother" = 'B',
  "Sister" = 'S'
}

export enum MeetingStatus {
  "A_member" = 'A',
  "B_member" = 'B',
  "C_member" = 'C',
  "D_member" = 'D',
  "E_member" = 'E'
}