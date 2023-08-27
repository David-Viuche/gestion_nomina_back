import mongoose from 'mongoose'
import Venta from '../models/venta.model.js'
import Asesor from '../models/asesor.model.js'

export const getVentas = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const ventas = await Venta.find({ idAsesor: req.params.id })
  if (!ventas) return res.status(404).json({ message: 'Asesor sales not found' })

  res.json(ventas)
}

export const createVenta = async (req, res) => {
  const { idAsesor, mes, anio, montoVenta } = req.body

  try {
    const asesorFound = await Asesor.findById(idAsesor)

    if (!asesorFound) {
      return res.status(400).json({ message: 'Invalid asesor ID' })
    }

    const newVenta = new Venta({
      idAsesor,
      mes,
      anio,
      montoVenta
    })

    const saveVenta = await newVenta.save()

    res.json(saveVenta)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getVenta = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const ventas = await Venta.find(
    {
      idAsesor: req.params.id,
      anio: req.params.anio,
      mes: req.params.mes
    }
  )

  if (!ventas) return res.status(404).json({ message: 'Asesor sales not found' })

  res.json(ventas)
}
