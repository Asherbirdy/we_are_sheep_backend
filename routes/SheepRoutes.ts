import { Router } from 'express'
import { SheepController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post(
  '/create',
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  SheepController.create
)

export default router
