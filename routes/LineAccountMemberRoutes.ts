import { Router } from 'express'
import { LineAccountMemberController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'
const router = Router()

router.get(
  '/getAll', 
  authenticateUser,
  checkVerifiedEmail,
  LineAccountMemberController.getAllLineAccountMember
)

router.post(
  '/create',
  LineAccountMemberController.createLineAccountMember
)

router.post(
  '/activate',
  LineAccountMemberController.activateLineAccountMember
)

router.put(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  LineAccountMemberController.editActivateLineAccountMember
)

router.delete(
  '/delete',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  LineAccountMemberController.deleteLineAccountMember
)

router.post(
  '/check',
  LineAccountMemberController.checkLineAccountMember
)

export default router