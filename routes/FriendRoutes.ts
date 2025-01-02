import { Router } from 'express'
import { FriendController } from '../controllers'
// import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post( 
  '/request',
  authenticateUser,
  checkVerifiedEmail,
  FriendController.sendFriendRequest 
)

router.get(
  '/getSendFriendRequest',
  authenticateUser,
  checkVerifiedEmail,
  FriendController.getSendFriendRequest
)

router.get(
  '/getYourFriendRequest',
  authenticateUser,
  checkVerifiedEmail,
  FriendController.getYourFriendRequest
)

export default router