import {
  CreateSerialNumberController,
  GetAllSerialNumberController,
  EditSerialNumberController,
  DeleteSerialNumberController
} from './UserSerialNumberController/index'

export const UserSerialNumberController = {
  create: CreateSerialNumberController,
  getAll: GetAllSerialNumberController,
  edit: EditSerialNumberController,
  delete: DeleteSerialNumberController
}
