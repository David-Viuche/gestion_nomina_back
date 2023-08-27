import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { calculateNomina } from '../controllers/nomina.controller.js'

const router = Router()

router.post('/nomina/:anio/:mes', authRequired, calculateNomina)

export default router
