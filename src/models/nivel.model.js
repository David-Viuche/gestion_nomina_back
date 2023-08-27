import mongoose from 'mongoose'

const nivelSchema = new mongoose.Schema(
  {
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

export default mongoose.model('Nivel', nivelSchema)
