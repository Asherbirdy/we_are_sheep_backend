import { Router } from 'express'
import { DistrictController } from '../controllers'

const router = Router()

router.get( '/', DistrictController.get )

export default router