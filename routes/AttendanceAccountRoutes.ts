import { Router } from 'express'
import { AttendanceAccountController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { Role, RoleList } from '../enums'
const router = Router()

router.get(
  '/getAll', 
  authenticateUser,
  authorizePermission(... RoleList.districtLeaders),
  checkVerifiedEmail,
  AttendanceAccountController.getAllAttendanceAccount
)

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(Role.dev),
  AttendanceAccountController.createAttendanceAccount
)

export default router