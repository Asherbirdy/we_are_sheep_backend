import { Router } from 'express'
import { MeetingCenterController } from '../controllers/'
import { RoleList } from '../enums'
import { authenticateUser, checkVerifiedEmail, authorizePermission } from '../middleware'

const router = Router()

router.get(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  MeetingCenterController.getAll
)

router.post(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders), 
  MeetingCenterController.create
)
export default router