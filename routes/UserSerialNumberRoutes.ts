import { Router } from 'express'
import { authenticateUser, authorizePermission } from '../middleware'
import { RoleList } from '../enums'
import { UserSerialNumberController } from '../controllers'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.create
)

router.put(
  '/edit',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.edit
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
  UserSerialNumberController.delete
)

export default router