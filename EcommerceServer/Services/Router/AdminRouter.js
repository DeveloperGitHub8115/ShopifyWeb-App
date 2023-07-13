import express from "express";
import { AdminData, fetchAllPurchase, fetchAllPurchaseProduct, login, purchaseProduct, removePurchase, updatePurchasetoLogin } from "../Controller/AdminController.js";
import multer from "multer";

import path from "path";
const AdminRouter = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./Services/AdminImages',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
AdminRouter.use(express.static('Services/AdminImages'));
const upload = multer({ storage: storage });

AdminRouter.post("/admin",AdminData);
AdminRouter.post("/admin/sign",login);
AdminRouter.post("/savepurchasedata",upload.single("image"),purchaseProduct);
AdminRouter.put("/login/purchaseproduct/:id/:obj",updatePurchasetoLogin);
AdminRouter.get("/fetch/add/:id",fetchAllPurchaseProduct);
AdminRouter.get("/fetchpurchase", fetchAllPurchase)
AdminRouter.delete("/delete/cartitem/:id",removePurchase);

export default AdminRouter;