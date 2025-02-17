import { Router } from 'express'
import { TeemMeetingAttendController } from '../controllers'

const router = Router()

router.post('/', TeemMeetingAttendController.create)
router.post('/get', TeemMeetingAttendController.get)

export default router