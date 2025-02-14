import { Router } from 'express'
import { SheepController } from '../controllers'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
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

router.get(
  '/district-member-by-district-id',
  authenticateUser,
  checkVerifiedEmail,
  SheepController.getDistrictMemberByDistrictId
)

export default router