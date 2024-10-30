import { Router } from 'express'
import { MemberNoteController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberNoteController.create 
)

router.patch( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberNoteController.edit 
)

router.delete( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberNoteController.delete 
)

export default router