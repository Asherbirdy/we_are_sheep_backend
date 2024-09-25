export enum Role {
  "dev" = "dev", // 開發者
  "admin" = "admin", // 管理者
  "fullTime" = "fullTime", // 全職同工
  "districtLeader" = "districtLeader", // 區域領導者
  "shepherd" = "shepherd", // 牧者
  "user" = "user" // 使用者
}

export const RoleList = {
  "admins": [Role.dev, Role.admin],
  "fullTime": [Role.dev, Role.admin, Role.fullTime],
  "districtLeaders": [Role.dev, Role.admin, Role.districtLeader],
  "shepherds": [Role.dev, Role.admin, Role.districtLeader, Role.shepherd],
  "users": [Role.dev, Role.admin, Role.districtLeader, Role.shepherd, Role.user],
}