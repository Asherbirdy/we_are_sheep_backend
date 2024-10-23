import {
  CreateSerialNumberController,
  GetAllSerialNumberController,
  DeleteSerialNumberController
} from './UserSerialNumber/index'

export const UserSerialNumberController = {
  create: CreateSerialNumberController,
  getAll: GetAllSerialNumberController,
  delete: DeleteSerialNumberController
}
