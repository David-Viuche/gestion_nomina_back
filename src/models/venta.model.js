import mongoose from 'mongoose'

const ventaSchema = new mongoose.Schema(
  {
    idAsesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asesor',
      required: true
    },
    mes: {
      type: Number,
      required: true
    },
    anio: {
      type: Number,
      required: true
    },
    montoVenta: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Venta', ventaSchema)
