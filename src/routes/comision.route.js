import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { calculateComision, getComisiones } from '../controllers/comisiones.controller.js'

const router = Router()

router.get('/comisiones/:id', authRequired, getComisiones)

router.post('/comisiones/:id/:anio/:mes', authRequired, calculateComision)

export default router
