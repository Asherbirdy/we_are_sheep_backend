import { Router } from 'express'
import { AttendanceAccountController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'
const router = Router()

router.get(
  '/getAll', 
  authenticateUser,
  checkVerifiedEmail,
  AttendanceAccountController.getAllAttendanceAccount
)

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  AttendanceAccountController.createAttendanceAccount
)

router.post(
  '/activate',
  AttendanceAccountController.activateAttendanceAccount
)

router.put(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  AttendanceAccountController.editActivateAttendanceAccount
)

router.delete(
  '/delete',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  AttendanceAccountController.deleteAttendanceAccount
)

export default router