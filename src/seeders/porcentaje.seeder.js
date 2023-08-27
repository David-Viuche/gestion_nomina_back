import Porcentaje from '../models/porcentaje.model.js'
import { connectDB } from '../db.js'
const generate = async () => {
  try {
    const newPorcentaje = new Porcentaje({
      nivel: 'J',
      meta: 5000000,
      com1: 6,
      com2: 10,
      com3: 12
    })

    await newPorcentaje.save()

    const newPorcentaje1 = new Porcentaje({
      nivel: 'S',
      meta: 10000000,
      com1: 4,
      com2: 8,
      com3: 10
    })

    await newPorcentaje1.save()

    const newPorcentaje2 = new Porcentaje({
      nivel: 'M',
      meta: 15000000,
      com1: 4,
      com2: 6,
      com3: 8
    })

    await newPorcentaje2.save()
  } catch (error) {
    console.log(error)
  }
}
connectDB()
generate()
