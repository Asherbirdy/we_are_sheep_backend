import { Router } from 'express'
import { UserController } from '../controllers'
import { Role } from '../enums'
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
  authorizePermission(Role.dev),
  UserController.getAllUsers
)

router.put(
  '/editUserInfo',
  authenticateUser,
  authorizePermission(Role.dev),
  UserController.editUserInfo
)

export default router
