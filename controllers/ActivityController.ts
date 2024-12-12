import { 
  CreateActivityController, 
  DeleteActivityByIdController, 
  EditActiivityByIdController, 
  GetActivitybyYearMonthController,
  GetRecentlyActivityController
} from './Activity'

export const ActivityController = {
  create: CreateActivityController,
  getbyYearMonth: GetActivitybyYearMonthController,
  getRecently: GetRecentlyActivityController,
  editById: EditActiivityByIdController,
  deleteById: DeleteActivityByIdController
}
