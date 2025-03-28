import { Router } from 'express'
import { LandingPageController } from '../controllers'
import { authenticateUser, authorizePermission, checkVerifiedEmail, landingPagePermission } from '../middleware'
import { LandingPageAccess, RoleList } from '../enums'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.create),
  LandingPageController.createLandingPage
)

router.get(
  '/all',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.edit_post),
  LandingPageController.getAllLandingPage
)

router.put(
  '/editPageInfoById',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.edit_post),
  LandingPageController.editLandingPageInfoById
)

router.get(
  '/getLandingPageInfoById',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.edit_post),
  LandingPageController.getLandingPageInfoById
)

export default router
