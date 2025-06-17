import { Router } from 'express'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
import { LineFellowshipReportIdController } from '../controllers/LineFellowshipReportIdController'
const router = Router()

router.get(
  '/', 
  authenticateUser,
  checkVerifiedEmail,
  LineFellowshipReportIdController.getAll
)

router.post(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  LineFellowshipReportIdController.create
)

export default router