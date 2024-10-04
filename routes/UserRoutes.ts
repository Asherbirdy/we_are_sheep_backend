import { Router } from 'express'
import { UserController } from '../controllers'
import { authenticateUser, authorizePermission } from '../middleware'
import { Role, RoleList } from '../enums'
const router = Router()

router.get(
  '/showMe',
  authenticateUser, authorizePermission(Role.user),
  UserController.showCurrentUser
)

router.patch(
  '/updateUserPassword',
  authenticateUser,
  UserController.updatePassword
)

router.get(
  '/showNonBindMember',
  authenticateUser,
  authorizePermission(... RoleList.fullTime),
  UserController.showNonBindMember
)

export default router
