import { Router } from 'express'
import { SheepController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.create
)

router.get(
  '/list',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.getList
)

router.delete(
  '/delete',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.delete
)

router.patch(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
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

export default router