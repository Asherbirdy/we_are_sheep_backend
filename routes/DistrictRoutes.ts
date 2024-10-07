import { Router } from 'express'
import { DistrictController } from '../controllers'
import { authenticateUser, authorizePermission } from '../middleware'
import { Role, RoleList } from '../enums'
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
  authorizePermission(Role.dev),
  DistrictController.create
)

router.put(
  '/',
  authenticateUser,
  authorizePermission(Role.dev),
  DistrictController.edit
)

router.put(
  '/close',
  authenticateUser,
  authorizePermission(Role.dev),
  DistrictController.close
)

router.put(
  '/open',
  authenticateUser,
  authorizePermission(Role.dev),
  DistrictController.open
)

export default router