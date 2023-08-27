import mongoose from 'mongoose'

const asesorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    idNivel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nivel',
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Asesor', asesorSchema)
