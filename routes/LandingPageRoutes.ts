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
  authorizePermission(... RoleList.users),
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
  LandingPageController.getLandingPageInfoById
)

router.post(
  '/setUrlPath',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.create),
  LandingPageController.SetUrlPathController
)

router.delete(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.delete),
  LandingPageController.deleteLandingPageById
)

router.put(
  '/editHtmlById',
  authenticateUser,
  checkVerifiedEmail,
  landingPagePermission(LandingPageAccess.edit_post),
  LandingPageController.editLandingPageHtmlById
)

export default router
