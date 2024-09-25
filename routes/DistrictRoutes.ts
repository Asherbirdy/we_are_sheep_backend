import { Router } from 'express'
import { DistrictController } from '../controllers'
import { authenticateUser, authorizePermission } from '../middleware'
import { RoleList } from '../enums'
const router = Router()

router.get(
  '/',
  authenticateUser,
  authorizePermission(... RoleList.users),
  DistrictController.get
)

router.post(
  '/',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  DistrictController.create
)

router.put(
  '/',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  DistrictController.edit
)

router.put(
  '/close',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  DistrictController.close
)

router.put(
  '/open',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  DistrictController.open
)

export default router