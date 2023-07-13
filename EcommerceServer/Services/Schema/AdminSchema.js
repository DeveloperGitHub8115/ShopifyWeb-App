import mongoose, { model, mongo } from "mongoose";
const userSchema = new mongoose.Schema({
         name:{type:String,required:true},
         number:{type:Number,required:true},
         gmail:{type:String,required:true},
         password:{type:String,required:true},
         userPurchase:[{type:mongoose.Schema.Types.ObjectId,ref:"userPurchase"}]
})
const Purchase =new mongoose.Schema({
    category:{type:String},
    name:{type:String,required:true},
    modelname:{type:String},
    warranty:{type:String,required:true},
    price:{type:Number,required:true},
    about:{type:String},
    image:{type:String}
    
      
         
})

export const  userData = mongoose.model("userData",userSchema);
export const PurchaseData =mongoose.model("userPurchase",Purchase); 