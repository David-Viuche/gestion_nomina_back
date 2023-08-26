import mongoose from 'mongoose'

const asesorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    nivel: {
      type: String,
      required: true,
      enum: ['J', 'S', 'M']
    },
    salarioBase: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Asesor', asesorSchema)
