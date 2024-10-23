import { Router } from 'express'
import { UserController } from '../controllers'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get(
  '/showMe',
  authenticateUser,
  UserController.showCurrentUser
)

router.patch(
  '/updateUserPassword',
  authenticateUser,
  checkVerifiedEmail,
  UserController.updatePassword
)

// router.get(
//   '/showNonBindUser',
//   authenticateUser,
//   authorizePermission(... RoleList.fullTime),
//   UserController.showNonBindUser
// )

// router.put(
//   '/bindMemberToUser',
//   authenticateUser,
//   authorizePermission(... RoleList.admins),
//   UserController.bindMemberToUser
// )

export default router
