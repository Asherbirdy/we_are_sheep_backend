import {
  CreateSerialNumberController,
  GetAllSerialNumberController,
  EditSerialNumberController,
  DeleteSerialNumberController
} from './UserSerialNumber/index'

export const UserSerialNumberController = {
  create: CreateSerialNumberController,
  getAll: GetAllSerialNumberController,
  edit: EditSerialNumberController,
  delete: DeleteSerialNumberController
}
