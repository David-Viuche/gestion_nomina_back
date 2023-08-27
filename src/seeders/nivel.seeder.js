import Nivel from '../models/nivel.model.js'
import { connectDB } from '../db.js'
const generate = async () => {
  try {
    const newNivel = new Nivel({
      nivel: 'J',
      salarioBase: 1800000
    })

    await newNivel.save()

    const newNivel1 = new Nivel({
      nivel: 'S',
      salarioBase: 2500000
    })

    await newNivel1.save()

    const newNivel2 = new Nivel({
      nivel: 'M',
      salarioBase: 3200000
    })

    await newNivel2.save()
  } catch (error) {
    console.log(error)
  }
}
connectDB()
generate()
