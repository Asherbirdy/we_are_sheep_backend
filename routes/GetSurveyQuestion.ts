import { Router } from 'express'
import { SurveyQuestionController } from '../controllers'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
const router = Router()

router.post(
  '/getAll',
  authenticateUser,
  checkVerifiedEmail,
  SurveyQuestionController.getSurveyQuestion
)

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SurveyQuestionController.createSurveyQuestion
)

router.patch(
  '/editById',
  authenticateUser,
  checkVerifiedEmail,
  SurveyQuestionController.editSurveyById
)

export default router
