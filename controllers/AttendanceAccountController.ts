import { 
  GetAllAttendanceAccountController,
  CreateAttendanceAccountController,
  ActivateAttendanceAccountController,
  EditActivateAttendanceAccountController,
  DeleteAttendanceAccountController 
} from './AttendanceAccount'

export const AttendanceAccountController = {
  getAllAttendanceAccount: GetAllAttendanceAccountController,
  createAttendanceAccount: CreateAttendanceAccountController,
  activateAttendanceAccount: ActivateAttendanceAccountController,
  editActivateAttendanceAccount: EditActivateAttendanceAccountController,
  deleteAttendanceAccount: DeleteAttendanceAccountController
}