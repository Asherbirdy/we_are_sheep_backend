import { Router } from 'express'
import { SheetController } from '../controllers'
const router = Router()

router.post('/create', SheetController.createSheet)

export default router
