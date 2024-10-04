import { Router } from 'express'
import { MemberController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission } from '../middleware'
const router = Router()

router.get( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.shepherds), 
  MemberController.get 
)

router.post( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.shepherds), 
  MemberController.create 
)
router.post( 
  '/bindAccountToUser',
  authenticateUser, 
  authorizePermission(... RoleList.admins), 
  MemberController.bind 
)

export default router