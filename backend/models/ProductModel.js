import mongoose from 'mongoose'

//creamos un shema
const productShema = new mongoose.Schema(
  {
      descripcion: {
      type: String,
      require: [true, 'please complete the field'],
      },
      stock: {
      type: Number,
      require: [true, 'please complete the field'],
      },
      price: {
      type: Number,
      require: [true, 'please complete the field'],
      },
    },

    {
      timestamps:true,
      versionKey:false

    }
);

// creamos modelo apartir del shema  export parapoder utilizarlo
export const ProductModel = mongoose.model('Product', productShema)
