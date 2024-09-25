import { Router } from 'express'
import { UserController } from '../controllers'
import { authenticateUser, authorizePermission } from '../middleware'
import { Role } from '../enums'
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

export default router
