import { Router } from 'express'
import { GroupController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  GroupController.create
)

export default router
