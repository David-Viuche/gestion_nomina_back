import mongoose from 'mongoose'
import Asesor from '../models/asesor.model.js'

export const getAsesores = async (req, res) => {
  const asesores = await Asesor.find()
  res.json(asesores)
}

export const createAsesor = async (req, res) => {
  const { nombre, nivel, salarioBase } = req.body

  try {
    const newAsesor = new Asesor({
      nombre,
      nivel,
      salarioBase
    })

    const saveAsesor = await newAsesor.save()
    res.json(saveAsesor)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getAsesor = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const asesor = await Asesor.findById(req.params.id)
  if (!asesor) return res.status(404).json({ message: 'Asesor not found' })

  res.json(asesor)
}

export const deleteAsesor = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const asesor = await Asesor.findByIdAndDelete(req.params.id)

  if (!asesor) return res.status(404).json({ message: 'Asesor not found' })

  res.sendStatus(204)
}

export const updateAsesor = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const asesor = await Asesor.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if (!asesor) return res.status(404).json({ message: 'Asesor not found' })

  res.json(asesor)
}
