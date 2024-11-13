import { Router } from 'express'
import { ActivityController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.get('/', ActivityController.getbyYearMonth)
router.post('/create', authenticateUser, ActivityController.create)
router.put('/edit', authenticateUser, ActivityController.editById)
router.delete('/delete/:activityId', authenticateUser, ActivityController.deleteById)

export default router
