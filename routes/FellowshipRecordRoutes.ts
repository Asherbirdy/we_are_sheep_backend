import { Router } from 'express'
import { FellowshipRecordController } from '../controllers/FellowshipRecordController'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/checkOrCreate',
  authenticateUser,
  authorizePermission(... RoleList.users),
  checkVerifiedEmail,
  FellowshipRecordController.checkOrCreate
)

router.put(
  '/edit',
  authenticateUser,
  authorizePermission(... RoleList.users),
  checkVerifiedEmail,
  FellowshipRecordController.edit
)

export default router