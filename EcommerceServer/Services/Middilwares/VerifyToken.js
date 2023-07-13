import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken"
export function VerifyToken(req,res)
{
      const authHeader = req.get('Authorization');
      if(authHeader)
      {
        const auth = authHeader.split(' ')[1];
        jwt.verify(auth,"sumit123",(error,payload)=>{
               if(error){
                    console.log(error);
                    res.status(StatusCodes.UNAUTHORIZED).json("Access Denied");
               }
               else{
                  next();
               }
        })
      }
      else{
        res.status(StatusCodes.UNAUTHORIZED).json("Access Denied");  
      }

}