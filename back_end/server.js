import express from "express"
const app = express()
import cors from 'cors'
import routes from './routes/jwtAuth.js'
import routes2 from './routes/dashboard.js'

app.use(cors())
app.use(express.json())

//ROUTES//

//register and login routes
app.use("/auth", routes);

//dashboard routes
app.use("/dashboard", routes2)

app.listen(5000, ()=>{
  console.log('Server is running on port 5000')
});