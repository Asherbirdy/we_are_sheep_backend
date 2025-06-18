import { Router } from 'express'
import { FellowshipRecordController } from '../controllers/FellowshipRecordController'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/check',
  authenticateUser,
  authorizePermission(... RoleList.users),
  checkVerifiedEmail,
  FellowshipRecordController.check
)

router.put(
  '/edit',
  authenticateUser,
  authorizePermission(... RoleList.users),
  checkVerifiedEmail,
  FellowshipRecordController.edit
)

export default router