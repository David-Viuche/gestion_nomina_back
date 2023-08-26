import mongoose from 'mongoose'

import dotenv from 'dotenv'

await dotenv.config()
export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@${process.env.HOSTDB}/${process.env.NOMBDB}?retryWrites=true&w=majority`)
    console.log('>> DB is connected')
  } catch (error) {
    console.log('>> DB connection Error ', error)
  }
}
