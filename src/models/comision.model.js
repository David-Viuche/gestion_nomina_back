import mongoose from 'mongoose'

const comisionSchema = new mongoose.Schema(
  {
    idAsesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asesor',
      required: true
    },
    idVenta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venta',
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
