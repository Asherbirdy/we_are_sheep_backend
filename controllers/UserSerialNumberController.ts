import { 
  CreateSerialNumberModule, GetAllSerialNumberModule, EditSerialNumberModule,DeleteSerialNumberModule
} from '../modules'

export const UserSerialNumberController = {
  create: CreateSerialNumberModule,
  getAll: GetAllSerialNumberModule,
  edit: EditSerialNumberModule,
  delete: DeleteSerialNumberModule
}
