import mongoose from 'mongoose'
import Comision from '../models/comision.model.js'
import Venta from '../models/venta.model.js'
import Asesor from '../models/asesor.model.js'
import Porcentaje from '../models/porcentaje.model.js'

export const getComisiones = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const comisiones = await Comision.find({ idAsesor: req.params.id })
  if (!comisiones) return res.status(404).json({ message: 'Asesor comision not found' })

  res.json(comisiones)
}

export const calculateComision = async (req, res) => {
  const { id: idAsesor, mes, anio } = req.params

  try {
    const asesorFound = await Asesor.findById(idAsesor).populate('idNivel')

    if (!asesorFound) {
      return res.status(400).json({ message: 'Invalid asesor ID' })
    }

    const { montoVenta, _id } = await Venta.findOne({ idAsesor, mes, anio })

    if (!montoVenta) return res.status(400).json({ message: 'Sale no found' })

    const porcentaje = await Porcentaje.findOne({ nivel: asesorFound.idNivel.nivel })

    let montoComision = 0

    if (montoVenta >= porcentaje.meta && montoVenta < (porcentaje.meta + (porcentaje.meta * 0.2))) {
      montoComision = (montoVenta * porcentaje.com1) / 100
    }

    if (montoVenta >= (porcentaje.meta + (porcentaje.meta * 0.2)) && montoVenta < (porcentaje.meta + (porcentaje.meta * 0.4))) {
      montoComision = (montoVenta * porcentaje.com2) / 100
    }

    if (montoVenta >= (porcentaje.meta + (porcentaje.meta * 0.4))) {
      montoComision = (montoVenta * porcentaje.com3) / 100
    }

    const newComision = {
      idAsesor,
      idVenta: _id,
      mes,
      anio,
      montoComision
    }

    const saveComision = await Comision.findOneAndUpdate({ idAsesor, mes, anio }, newComision, { new: true, upsert: true })

    res.json(saveComision)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
