import { Router } from 'express'
import { SheepController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()
// 
router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  SheepController.create
)

router.get(
  '/list',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.users),
  SheepController.getList
)

router.delete(
  '/delete',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  SheepController.delete
)

router.patch(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
  authorizePermission(... RoleList.districtLeaders),
  SheepController.editSheep
)

router.get(
  '/user-district-sheep',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.getUserDistrictSheep
)

router.get(
  '/user-and-district-sheep',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.userAndDistrictSheep
)

router.get(
  '/district-member-by-district-id',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.getDistrictMemberByDistrictId
)

export default router