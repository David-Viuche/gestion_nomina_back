import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createAsesor, deleteAsesor, getAsesor, getAsesores, updateAsesor } from '../controllers/asesores.controller.js'

const router = Router()

router.get('/asesores', authRequired, getAsesores)

router.get('/asesores/:id', authRequired, getAsesor)

router.post('/asesores', authRequired, createAsesor)

router.delete('/asesores/:id', authRequired, deleteAsesor)

router.put('/asesores/:id', authRequired, updateAsesor)

export default router
