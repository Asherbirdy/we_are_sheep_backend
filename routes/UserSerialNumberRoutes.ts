import { Router } from 'express'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'
import { UserSerialNumberController } from '../controllers'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  UserSerialNumberController.create
)

router.get(
  '/getAll',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.getAll
)

router.delete(
  '/delete/:id',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  UserSerialNumberController.delete
)

export default router