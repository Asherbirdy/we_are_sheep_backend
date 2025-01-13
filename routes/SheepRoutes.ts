import { Router } from 'express'
import { SheepController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.create
)

router.get(
  '/list',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.getList
)

export default router
