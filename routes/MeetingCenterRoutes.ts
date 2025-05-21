import { Router } from 'express'
import { MeetingCenterController } from '../controllers/'
import { authenticateUser, checkVerifiedEmail } from '../middleware'

const router = Router()

router.get(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  MeetingCenterController.getAll
)

export default router