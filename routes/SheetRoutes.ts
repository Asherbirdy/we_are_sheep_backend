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

router.get(
  '/all',
  authenticateUser,
  checkVerifiedEmail,
  SheetController.getAllGoogleSheetApi
)

router.put(
  '/edit',
  authenticateUser,
  checkVerifiedEmail,
  SheetController.editGoogleSheet
)

router.delete(
  '/delete',
  authenticateUser,
  checkVerifiedEmail,
  SheetController.deleteGoogleSheet
)
export default router
