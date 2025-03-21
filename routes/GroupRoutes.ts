import { Router } from 'express'
import { GroupController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  GroupController.create
)

router.post(
  '/setGroupLeader',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  GroupController.setGroupLeader
)

router.get(
  '/getAllGroups',
  authenticateUser,
  authorizePermission(... RoleList.users),
  GroupController.getAllGroups
)
export default router
