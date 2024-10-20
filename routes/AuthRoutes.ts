import { Router } from 'express'
import { AuthController } from '../controllers'
import { authenticateUser } from '../middleware'
const router = Router()

router.post('/register', AuthController.register)
router.post('/userRegister', AuthController.userRegister)
router.post('/login', AuthController.login)
router.delete('/logout', authenticateUser, AuthController.logout)
router.get('/refreshToken', authenticateUser, AuthController.refreshToken)
export default router
