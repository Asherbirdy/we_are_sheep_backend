export enum Role {
  "dev" = "dev", // 開發者
  "admin" = "admin", // 管理者
  "districtLeader" = "districtLeader", // 區域領導者
  "shepherd" = "shepherd", // 牧者
  "user" = "user" // 使用者
}

export const RoleList = {
  "users": [Role.dev, Role.admin, Role.districtLeader, Role.shepherd, Role.user],
  "shepherds": [Role.dev, Role.admin, Role.districtLeader, Role.shepherd],
  "districtLeaders": [Role.dev, Role.admin, Role.districtLeader],
  "admins": [Role.dev, Role.admin]
}