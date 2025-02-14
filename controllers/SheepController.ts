import { 
  CreateSheepController, 
  GetSheepListController,
  DeleteSheepController,
  EditSheepController,
  GetUserDistrictSheepController,
  UserAndDistrictSheepController,
  GetDistrictMemberByDistrictIdController 
} from './Sheep'
  
export const SheepController = {
  create: CreateSheepController,
  getList: GetSheepListController,
  delete: DeleteSheepController,
  editSheep: EditSheepController,
  getUserDistrictSheep: GetUserDistrictSheepController,
  userAndDistrictSheep: UserAndDistrictSheepController,
  getDistrictMemberByDistrictId: GetDistrictMemberByDistrictIdController
}
