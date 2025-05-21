import { Router } from 'express'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'
import { UserSerialNumberController } from '../controllers'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  UserSerialNumberController.create
)

router.get(
  '/getAll',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  UserSerialNumberController.getAll
)

router.delete(
  '/delete',
  authenticateUser,
  authorizePermission(... RoleList.districtLeaders),
  checkVerifiedEmail,
  UserSerialNumberController.delete
)

router.post(
  '/districtLeaderCreateUserSerial',
  authenticateUser,
  authorizePermission(... RoleList.districtLeaders),
  checkVerifiedEmail,
  UserSerialNumberController.districtLeaderCreate
)

router.get(
  '/getLeaderSerialNumber',
  authenticateUser,
  authorizePermission(... RoleList.districtLeaders),
  checkVerifiedEmail,
  UserSerialNumberController.getLeaderSerialNumber
)

export default router
