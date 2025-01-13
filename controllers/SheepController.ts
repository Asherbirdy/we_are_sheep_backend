import { CreateSheepController, GetSheepListController, DeleteSheepController } from './Sheep'

export const SheepController = {
  create: CreateSheepController,
  getList: GetSheepListController,
  delete: DeleteSheepController
}