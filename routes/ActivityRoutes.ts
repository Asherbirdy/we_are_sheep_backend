import { Router } from 'express'
import { ActivityController } from '../controllers'
import { RoleList } from '../enums'
import {
  authenticateUser,
  authorizePermission,
  checkVerifiedEmail
} from '../middleware'

const router = Router()

router.get('/', ActivityController.getbyYearMonth)

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  ActivityController.create
)
router.put(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  ActivityController.editById
)

router.delete(
  '/delete/:activityId',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  ActivityController.deleteById
)

export default router
