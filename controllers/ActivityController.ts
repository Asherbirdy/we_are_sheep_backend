import { 
  CreateActivityController, 
  DeleteActivityByIdController, 
  EditActiivityByIdController, 
  GetActivitybyYearMonthController,
  GetYearActivityController
} from './Activity'

export const ActivityController = {
  create: CreateActivityController,
  getbyYearMonth: GetActivitybyYearMonthController,
  getYear: GetYearActivityController,
  editById: EditActiivityByIdController,
  deleteById: DeleteActivityByIdController
}
