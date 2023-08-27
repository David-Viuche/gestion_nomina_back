import Comision from '../models/comision.model.js'

export const calculateNomina = async (req, res) => {
  const { mes, anio } = req.params

  try {
    const ventasFound = await Comision.find({ mes, anio }).populate({
      path: 'idAsesor',
      populate: {
        path: 'idNivel'
      }
    }).populate('idVenta')

    if (!ventasFound) {
      return res.status(400).json({ message: 'No sales found' })
    }

    const nomina = []

    for (let i = 0; i < ventasFound.length; i++) {
      const venta = ventasFound[i]

      const nominaRecord = {
        asesor: {
          _id: venta.idAsesor._id,
          nombre: venta.idAsesor.nombre,
          nivel: venta.idAsesor.idNivel.nivel,
          salarioBase: venta.idAsesor.idNivel.salarioBase

        },
        venta: {
          _id: venta.idVenta._id,
          mes: venta.idVenta.mes,
          anio: venta.idVenta.anio,
          montoVenta: venta.idVenta.montoVenta
        },
        comision: {
          montoComision: venta.montoComision,
          mes: venta.mes,
          anio: venta.anio
        },
        total: {
          salarioBruto: venta.idAsesor.idNivel.salarioBase - (venta.idAsesor.idNivel.salarioBase * 0.0875) + venta.montoComision,
          aporteSalud: venta.idAsesor.idNivel.salarioBase * 0.04,
          aportePension: venta.idAsesor.idNivel.salarioBase * 0.04,
          aporteRiesgos: venta.idAsesor.idNivel.salarioBase * 0.0075
        }
      }
      nomina.push(nominaRecord)
    }

    res.json(nomina)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
