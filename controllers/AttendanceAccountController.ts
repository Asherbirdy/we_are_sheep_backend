import { GetAllAttendanceAccountController, CreateAttendanceAccountController, ActivateAttendanceAccountController, EditActivateAttendanceAccountController } from './AttendanceAccount'

export const AttendanceAccountController = {
  getAllAttendanceAccount: GetAllAttendanceAccountController,
  createAttendanceAccount: CreateAttendanceAccountController,
  activateAttendanceAccount: ActivateAttendanceAccountController,
  editActivateAttendanceAccount: EditActivateAttendanceAccountController
}