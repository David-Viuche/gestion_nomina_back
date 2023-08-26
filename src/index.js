import app from './app.js'
import { connectDB } from './db.js'

connectDB()

app.listen(3005)

console.log('Server on port ', 3005)
