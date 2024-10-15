import { Router } from 'express'
import { authenticateUser, authorizePermission } from '../middleware'
import { RoleList } from '../enums'
import { UserSerialNumberController } from '../controllers'
const router = Router()

router.get(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.create
)

router.get(
  '/getAll',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.getAll
)

export default router
