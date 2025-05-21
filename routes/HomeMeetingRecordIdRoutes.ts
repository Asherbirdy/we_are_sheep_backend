import { Router } from 'express'
import { HomeMeetingRecordIdController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.get(
  '/getAll',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  HomeMeetingRecordIdController.GetAllRecordIdController
)

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.admins),
  HomeMeetingRecordIdController.CreateRecordIdController
)

export default router