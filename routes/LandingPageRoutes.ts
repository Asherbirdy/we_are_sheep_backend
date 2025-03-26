import { Router } from 'express'
import { LandingPageController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
import { RoleList } from '../enums'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  checkVerifiedEmail,
  LandingPageController.createLandingPage
)

router.get(
  '/all',
  LandingPageController.getAllLandingPage
)

router.put(
  '/editPageInfoById',
  authenticateUser,
  authorizePermission(... RoleList.admins),
  LandingPageController.editLandingPageInfoById
)
export default router
