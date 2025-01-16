import { Router } from 'express'
import { SmallSheepController } from '../controllers'
import { checkVerifiedEmail,authenticateUser } from '../middleware'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SmallSheepController.create
)

export default router 