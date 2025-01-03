import { Router } from 'express'
import { MemberController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberController.get 
)

router.post( 
  '/',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberController.create 
)

router.patch( 
  '/editMemberInfo',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
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

router.delete( 
  '/deleteMemberById',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  checkVerifiedEmail,
  MemberController.deleteMemberById 
)

export default router