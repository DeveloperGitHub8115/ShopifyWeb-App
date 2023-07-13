import mongoose from "mongoose";
const AllProductSchema = new mongoose.Schema({
     products: [{type:mongoose.Schema.Types.ObjectId, ref:"products"}]       
})
const ProductSchma=new mongoose.Schema({
    category:{type:String,required:true},
    name:{type:String,required:true},
    modelname:{type:String},
    warranty:{type:String,required:true},
    price:{type:Number,required:true},
    about:{type:String},
    image:{type:String}

})

export const Allproduct = mongoose.model("AllProduct",AllProductSchema);
export const product = mongoose.model("products",ProductSchma); 