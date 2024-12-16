import { Router } from 'express'
import { SurveyQuestionController } from '../controllers'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
const router = Router()

router.get(
  '/getQuestion',
  authenticateUser,
  checkVerifiedEmail,
  SurveyQuestionController.getSurveyQuestion
)

export default router