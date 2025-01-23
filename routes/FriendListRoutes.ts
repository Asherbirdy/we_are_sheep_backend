import { Router } from 'express'
import { FriendListController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { Role, RoleList } from '../enums'
const router = Router()

router.get(
  '/',
  FriendListController.friendList
)

export default router