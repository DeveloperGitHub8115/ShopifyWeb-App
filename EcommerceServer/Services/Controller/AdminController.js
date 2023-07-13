import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CircularJSON from 'circular-json';
import { StatusCodes } from "http-status-codes";
import {PurchaseData, userData} from "../Schema/AdminSchema.js"

export async function AdminData(req,res){
       try {
                const newpassword =bcrypt.hashSync(req.body.password,12);
                req.body['password']=newpassword
               const data = new userData(req.body);
                const response = await data.save();
                  res.status(StatusCodes.CREATED).json(response)      
       } catch (error) {
           console.log(error);
           res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
        
       }
        
}

export async function login(req, res) {
  try {
    const admin = await userData.findOne({ gmail: req.body.gmail }).populate('userPurchase');
    if (admin) {
      if (bcrypt.compareSync(req.body.password, admin.password)) {
        const token = jwt.sign({ userId: admin.admin_id }, 'sumit123');
        // console.log(admin.userPurchase);
        res.status(StatusCodes.OK).json({ token: token,id:admin._id, userPurchase: admin.userPurchase });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Wrong Password');
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('User not found');
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}

export async function purchaseProduct(req,res)
{
    try {
      const image = `http://localhost:5700/${req.file.filename}`;
            console.log(image)
            req.body['image']=image;
            const data = new PurchaseData(req.body);
            const response= await data.save();
            res.status(StatusCodes.CREATED).json(response);
      
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
      
    }
     
}
export async function  updatePurchasetoLogin(req,res)
{
    try {
        const data = await userData.findByIdAndUpdate(req.params.id,{$push:{userPurchase:req.params.obj}})
        res.status(StatusCodes.OK).json(data);
      
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();

      
    }
}
export async function fetchAllPurchaseProduct(req, res) {
  try {
     const data = await userData.find().populate({
        path: "userPurchase",
     });

     const json = CircularJSON.stringify(data); 
     const parsedData = CircularJSON.parse(json); 

     res.status(StatusCodes.OK).json(parsedData);
  } catch (error) {
     console.log(error);
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
  }
}
export async function fetchAllPurchase(req,res)
{
   try {
            const data = await PurchaseData.find();
            res.status(StatusCodes.OK).json(data);
    
   } catch (error) {    
       console.log(error);
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json()
    
   }
}
export async function removePurchase(req,res)
{
     try {
          await PurchaseData.findByIdAndDelete(req.params.id);
          res.status(StatusCodes.NO_CONTENT).json();
      
     } catch (error) {
         console.log(error);
         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
      
     }
}
