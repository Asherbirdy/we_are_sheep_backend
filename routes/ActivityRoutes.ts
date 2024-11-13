import { Router } from 'express'
import { ActivityController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.get('/month', ActivityController.getbyMonth)

export default router