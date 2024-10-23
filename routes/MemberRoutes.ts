import { Router } from 'express'
import { MemberController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.shepherds), 
  checkVerifiedEmail,
  MemberController.get 
)

router.post( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.shepherds), 
  checkVerifiedEmail,
  MemberController.create 
)

router.patch( 
  '/editMemberInfo',
  authenticateUser, 
  authorizePermission(... RoleList.admins), 
  checkVerifiedEmail,
  MemberController.editMemberInfo 
)

router.get( 
  '/getAllDistrictMemberFromUser',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberController.getAllDistrictMemberFromUser 
)

router.patch( 
  '/editMemberMeetingStatus',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberController.editMemberMeetingStatus 
)

export default router