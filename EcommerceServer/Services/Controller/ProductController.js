import { StatusCodes } from "http-status-codes";
import { Allproduct, product } from "../Schema/ProductModel.js";
export async function SaveAllProduct(req,res)
{
    try {
         const data = new Allproduct(req.body);
          const response =  await data.save();
          res.status(StatusCodes.CREATED).json(response);
        
    } catch (error){
          console.log(error);
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
    }
}
export async function SaveProduct(req,res)
{
      try {
            const image = `http://localhost:5700/${req.file.filename}`;
            console.log(image)
            req.body['image']=image;
            const data = new product(req.body);
            const response= await data.save();
            res.status(StatusCodes.CREATED).json(response);
            
      } catch (error){
              console.log(error);
              res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
            
      }
}
export async function UpdateSaveProductToAllProduct(req,res)
{
      try {
              await Allproduct.findByIdAndUpdate(req.params.id,{$push:{products:req.params.obj}})
              res.status(StatusCodes.OK).json();   

      } catch (error){
              console.log(error);
              res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
            
      }
}
export async function fetchAllProduct(req,res)
{
      try {
             const data = await Allproduct.find().populate({
                    path:"products"
             })
              res.status(StatusCodes.OK).json(data);
            
      } catch (error){
              console.log(error);
              res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
            
      }
}