import { Router } from 'express'
import { FriendController } from '../controllers'
// import { RoleList } from '../enums'
// import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post( 
  '/friendRequest',
  FriendController.sendFriendRequest 
)

export default router