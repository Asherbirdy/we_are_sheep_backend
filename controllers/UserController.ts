import {
  EditUserDistrictAndRoleController,
  ShowCurrentUserController,
  UpdatePasswordController,
  GetAllUsersController
} from './User/index'

export const UserController = {
  showCurrentUser: ShowCurrentUserController,
  updatePassword: UpdatePasswordController,
  getAllUsers: GetAllUsersController,
  editUserInfo: EditUserDistrictAndRoleController
}
