import express from "express";
import { SaveAllProduct, SaveProduct, UpdateSaveProductToAllProduct, fetchAllProduct } from "../Controller/ProductController.js";
import multer from "multer";
import path from "path";
const ProductRouter = express.Router();
const storage = multer.diskStorage(
    {
        destination:'./Services/UserImages',
        filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    }
)
ProductRouter.use(express.static('Services/UserImages'));
const upload = multer({storage:storage});
ProductRouter.post("/" ,SaveAllProduct);
ProductRouter.post("/savedata",upload.single('image'),SaveProduct);
ProductRouter.get("/",fetchAllProduct);
ProductRouter.put("/productdata/update/:id/:obj",UpdateSaveProductToAllProduct);
export default ProductRouter;