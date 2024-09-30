import { Router } from 'express'
import { MemberController } from '../controllers'

const router = Router()

router.get( '/', MemberController.get )

export default router