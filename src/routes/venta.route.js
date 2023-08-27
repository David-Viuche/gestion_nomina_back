import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createVenta, getVenta, getVentas } from '../controllers/ventas.controller.js'

const router = Router()

router.get('/ventas/:id', authRequired, getVentas)

router.post('/ventas', authRequired, createVenta)

router.get('/ventas/:id/:anio/:mes', authRequired, getVenta)

export default router
