import { 
  CreateActivityController, 
  DeleteActivityByIdController, 
  EditActiivityByIdController, 
  GetActivitybyYearMonthController 
} from './Activity'

export const ActivityController = {
  create: CreateActivityController,
  getbyYearMonth: GetActivitybyYearMonthController,
  editById: EditActiivityByIdController,
  deleteById: DeleteActivityByIdController
}
