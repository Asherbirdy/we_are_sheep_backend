import { Router } from 'express'
import { SheetController } from '../controllers'
import { checkVerifiedEmail, authenticateUser } from '../middleware'

const router = Router()

router.post(
  '/create',
  authenticateUser,
  checkVerifiedEmail,
  SheetController.createSheet
)

export default router
