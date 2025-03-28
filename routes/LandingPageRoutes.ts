import { Router } from 'express'
import { LandingPageController } from '../controllers'
import { authenticateUser, checkVerifiedEmail, landingPagePermission } from '../middleware'
import { LandingPageAccess } from '../enums'

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

router.post(
  '/setUrlPath',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.create),
  LandingPageController.SetUrlPathController
)

export default router
