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

export default router