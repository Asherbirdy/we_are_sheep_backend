import { Router } from 'express'
import { UserController } from '../controllers'
import { Role, RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get(
  '/showMe',
  authenticateUser,
  UserController.showCurrentUser
)

router.patch(
  '/updateUserPassword',
  authenticateUser,
  checkVerifiedEmail,
  UserController.updatePassword
)

router.get(
  '/getAllUsers',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(Role.dev),
  UserController.getAllUsers
)

router.put(
  '/editUserInfo',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  UserController.editUserInfo
)

router.patch(
  '/changeUserAccess',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.admins),
  UserController.changeUserAccess
)

export default router
