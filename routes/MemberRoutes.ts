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

router.patch( 
  '/approveMemberToActive',
  authenticateUser, 
  authorizePermission(... RoleList.admins), 
  MemberController.approveMemberToActive 
)

router.patch( 
  '/editMemberInfo',
  authenticateUser, 
  authorizePermission(... RoleList.admins), 
  MemberController.editMember 
)

router.get( 
  '/getAllDistrictMemberFromUser',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  MemberController.getAllDistrictMemberFromUser 
)

router.patch( 
  '/editMemberMeetingStatus',
  authenticateUser, 
  authorizePermission(... RoleList.districtLeaders), 
  MemberController.editMemberMeetingStatus 
)

export default router