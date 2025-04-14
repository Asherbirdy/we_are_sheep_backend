import { Router } from 'express'
import { BlendingController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.get(
  '/getAllBlendingDetail',
  authenticateUser,
  BlendingController.getAllBlendingDetail
)

export default router
