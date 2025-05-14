import { Router } from 'express'
import { AttendanceAccountController } from '../controllers'

const router = Router()

router.get('/getAll', AttendanceAccountController.getAllAttendanceAccount)

export default router