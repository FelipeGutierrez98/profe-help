import mongoose from "mongoose";

// hay que poner en falso el strictQuery (por la version)
mongoose.set("strictQuery",false)

 export const connectDB = (uri)=>{
    return mongoose.connect(uri)
}