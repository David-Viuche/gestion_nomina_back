import mongoose from 'mongoose'

const ventaSchema = new mongoose.Schema(
  {
    idAsesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asesor',
      required: true
    },
    fechaVenta: {
      type: Date,
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
