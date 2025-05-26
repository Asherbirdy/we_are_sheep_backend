import { Router } from 'express'
import { BlendingController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get(
  '/createFromSheet',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  BlendingController.create
)
router.get(
  '/getAll',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  BlendingController.getAll
)

export default router
