import mongoose from 'mongoose'

const aporteSchema = new mongoose.Schema(
  {
    idAsesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asesor',
      required: true
    },
    tipoAporte: {
      type: String,
      required: true,
      enum: ['S', 'P', 'R']
    },
    porcentajeAporte: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Aporte', aporteSchema)
