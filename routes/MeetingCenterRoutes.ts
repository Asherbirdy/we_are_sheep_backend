import { Router } from 'express'
import { MeetingCenterController } from '../controllers/'
import { RoleList } from '../enums'
import { authenticateUser, checkVerifiedEmail, authorizePermission } from '../middleware'

const router = Router()

router.get(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.admins),
  MeetingCenterController.getAll
)

router.post(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.admins), 
  MeetingCenterController.create
)
export default router