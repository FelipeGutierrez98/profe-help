import express from "express";
import { getProduct,getProducts,createProduct,deleteProduct,updateProduct } from "../controllers/ProductController.js";

//para utilizar los metodos http para realizar las operaciones 

 const router = express.Router()
 
//forma 1

router.get("/",getProducts)
router.get("/:id",getProduct)
router.put("/:id",updateProduct)
router.post("/",createProduct)
router.delete("/:id",deleteProduct)

//forma 2 

/* 
router.route("/").get(getProducts).post(createProduct)
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct) */



export default router