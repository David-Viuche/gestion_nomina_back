import mongoose from 'mongoose'

const comisionSchema = new mongoose.Schema(
  {
    idAsesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asesor',
      required: true
    },
    fechaCalculo: {
      type: Date,
      required: true
    },
    metaAlcanzada: {
      type: Number,
      required: true
    },
    montoComision: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Comision', comisionSchema)
