import {
  ShowCurrentUserController,
  UpdatePasswordController,
  GetAllUsersController,
  EditUserInfoController
} from './User/index'

export const UserController = {
  showCurrentUser: ShowCurrentUserController,
  updatePassword: UpdatePasswordController,
  getAllUsers: GetAllUsersController,
  editUserInfo: EditUserInfoController
}
