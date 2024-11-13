import { Router } from 'express'
import { ActivityController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.get('/month', ActivityController.getbyMonth)
router.post('/create', authenticateUser, ActivityController.create)
router.put('/edit/:id', authenticateUser, ActivityController.editById)
router.delete('/delete/:id', authenticateUser, ActivityController.deleteById)

export default router
