import { Router } from 'express'
import { HomeMeetingController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  HomeMeetingController.CreateHomeMeetingController
)

router.get(
  '/getAll',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  HomeMeetingController.GetAllHomeMeetingController
)

export default router
