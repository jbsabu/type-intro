import cors from 'cors'
import express, {Request,Response} from 'express' 

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000,()=>{
  console.log('listening')
})

app.get("/",(req,res)=>res.send("welcome to œæœžßo"))