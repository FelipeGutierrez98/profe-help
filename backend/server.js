// el import se remplaza REQUIERED
import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import router from "./routes/routes.js"
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
// middlewras
app.use(urlencoded({extended:true})) //es necesario cuando enviamos un formulario con el metodo post //sino lo utilizamos genera undefineld
//la ruta para nuestros empoints
app.use("/api/products",router)




const PORT = process.env.PORT
const MONGO_URI =process.env.MONGO_URI
/* app.listen(()=>{
    connectDB(MONGO_URI)
    console.log("mongodb connected");
    console.log(`server running http://localhost:${PORT}`);
}) */

const start =async () =>{
  try {
   await connectDB(MONGO_URI)
   console.log("mongodb connected");
   app.listen(PORT,()=>{
    console.log(`server running http://localhost:${PORT}`);
   })
  } catch (error) {
    console.log(error);
  }
}
start()

// minuto 7:20 con  lo del try catch
// middlewras es una funcion tiene acceso a req,res y a la siguiente funcion de middleware en el;cilo de solicitud respuesta de cualquier aplicacion 
// middlewras 
/* app.use((req,res,next)=>{
  console.log("middlewars de ejemplo");
  next()
 })  */