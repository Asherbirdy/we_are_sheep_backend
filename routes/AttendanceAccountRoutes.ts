import { Router } from 'express'
import { AttendanceAccountController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'
const router = Router()

router.get(
  '/getAll', 
  authenticateUser,
  authorizePermission(... RoleList.districtLeaders),
  checkVerifiedEmail,
  AttendanceAccountController.getAllAttendanceAccount
)

export default router