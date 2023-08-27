import mongoose from 'mongoose'

const porcentajeSchema = new mongoose.Schema(
  {
    nivel: {
      type: String,
      required: true,
      enum: ['J', 'S', 'M']
    },
    meta: {
      type: Number,
      required: true
    },
    com1: {
      type: Number,
      required: true
    },
    com2: {
      type: Number,
      required: true
    },
    com3: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Porcentaje', porcentajeSchema)
