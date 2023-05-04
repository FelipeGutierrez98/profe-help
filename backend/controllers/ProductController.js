import { ProductModel } from '../models/ProductModel.js'

//vamos a tener los metodos
export const getProducts = async (req, res) => {
  try {
    //sentencias que se le van a ejecutar
    const products = await ProductModel.find()
    res.status(200).json
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//**************************** */
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findById(id)
    if (!product) {
      return res.status(404).json(`Product with ID ${id} not found`)
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//**************************** */
export const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)
    res.status(201).json(product) //creado
  } catch (error) {
    res.status(500).json({ message: 'An error has ocurred.' })
  }
}
//******************************** */
export const updateProduct =async (req, res) => {
  try {
    const {id}=req.params
   const product = await ProductModel.findByIdAndUpdate(
    {_id:id} ,
    req.body,
    {new:true}
   )
   res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
//************************************ */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await ProductModel.findByIdAndDelete(id)
    if (!product) {
      return res.status(404).json(`Product with ID ${id} not found`)
    }
    res.status(200).json("Product succesfully removed")
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
