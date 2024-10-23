import {
  CreateSerialNumberController,
  GetAllSerialNumberController,
  DeleteSerialNumberController
} from './UserSerialNumber/index'

/*
  Dev 可以創造 admin 的 serial number
  admin 可以創造 districtLeader 的 serial number ,不能創造 admin/dev 的 serial number
  一般都創建 districtLeader 的 serial number 給別人使用
*/ 

export const UserSerialNumberController = {
  create: CreateSerialNumberController,
  getAll: GetAllSerialNumberController,
  delete: DeleteSerialNumberController
}
