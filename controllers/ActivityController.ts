import { 
  CreateActivityController, 
  DeleteActivityByIdController, 
  EditActiivityByIdController, 
  GetActivitybyMonthController 
} from './Activity'

export const ActivityController = {
  create: CreateActivityController,
  getbyMonth: GetActivitybyMonthController,
  editById: EditActiivityByIdController,
  deleteById: DeleteActivityByIdController
}
