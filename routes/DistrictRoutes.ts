import { Router } from 'express'
import { DistrictController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { Role, RoleList } from '../enums'
const router = Router()

router.get(
  '/',
  DistrictController.get
)

router.post(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(Role.dev),
  DistrictController.create
)

router.put(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(Role.dev),
  DistrictController.edit
)

export default router