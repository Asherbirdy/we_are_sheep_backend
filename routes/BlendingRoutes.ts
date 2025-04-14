import { Router } from 'express'
import { BlendingController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.get(
  '/createFromSheet',
  authenticateUser,
  BlendingController.create
)
router.get(
  '/getAll',
  authenticateUser,
  BlendingController.getAll
)

export default router
