import mongoose from 'mongoose'
import Asesor from '../models/asesor.model.js'
import Nivel from '../models/nivel.model.js'

export const getAsesores = async (req, res) => {
  const asesores = await Asesor.find().populate('idNivel')
  res.json(asesores)
}

export const createAsesor = async (req, res) => {
  const { nombre, nivel } = req.body

  try {
    const nivelDocument = await Nivel.findOne({ nivel })

    if (!nivelDocument) {
      return res.status(400).json({ message: 'Invalid nivel format' })
    }

    const newAsesor = new Asesor({
      nombre,
      idNivel: nivelDocument._id
    })

    const saveAsesor = await newAsesor.save()
    const asesorWithPopulatedNivel = await saveAsesor.populate('idNivel')

    res.json(asesorWithPopulatedNivel)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getAsesor = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid ID format' })
  }

  const asesor = await Asesor.findById(req.params.id).populate('idNivel')
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

  const { nivel, nombre } = req.body

  const asesorFind = await Asesor.findById(req.params.id)

  if (!asesorFind) return res.status(404).json({ message: 'Asesor not found' })

  let idNivel = asesorFind.nivel

  if (nivel) {
    const nivelDocument = await Nivel.findOne({ nivel })

    if (!nivelDocument) {
      return res.status(400).json({ message: 'Invalid nivel format' })
    }

    idNivel = nivelDocument._id
  }

  const updateAsesor = {
    nombre,
    idNivel
  }

  const asesor = await Asesor.findByIdAndUpdate(req.params.id, updateAsesor, { new: true }).populate('idNivel')

  if (!asesor) return res.status(404).json({ message: 'Asesor not found' })

  res.json(asesor)
}
