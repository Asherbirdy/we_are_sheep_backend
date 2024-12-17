import { Router } from 'express'
import { SurveyController } from '../controllers'
import { RoleList } from '../enums'
import { authenticateUser, authorizePermission, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SurveyController.createSurvey
)

export default router
