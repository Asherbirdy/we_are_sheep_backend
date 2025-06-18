import { Router } from 'express'
import { authenticateUser, checkVerifiedEmail } from '../middleware'
import { LineFellowshipReportController } from '../controllers/LineFellowshipReportController'
const router = Router()

router.get(
  '/', 
  authenticateUser,
  checkVerifiedEmail,
  LineFellowshipReportController.getAll
)

router.post(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  LineFellowshipReportController.create
)

router.put(
  '/',
  authenticateUser,
  checkVerifiedEmail,
  LineFellowshipReportController.edit
)

export default router