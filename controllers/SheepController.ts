import { CreateSheepController, GetSheepListController, DeleteSheepController, EditSheepController } from './Sheep'

export const SheepController = {
  create: CreateSheepController,
  getList: GetSheepListController,
  delete: DeleteSheepController,
  editSheep: EditSheepController
}