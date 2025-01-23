import { CreateSheepController, GetSheepListController, DeleteSheepController, EditSheepController, GetUserDistrictSheepController } from './Sheep'
  
export const SheepController = {
  create: CreateSheepController,
  getList: GetSheepListController,
  delete: DeleteSheepController,
  editSheep: EditSheepController,
  getUserDistrictSheep: GetUserDistrictSheepController
}
