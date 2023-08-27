import app from './app.js'
import { connectDB } from './db.js'

connectDB()

app.set('port', process.env.PORT || 3005)

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
