import express from "express";
import cors from "cors";
import { Configure } from "./Services/Configure/DbConfig.js";
import ProductRouter from "./Services/Router/ProductRouter.js";
import AdminRouter from "./Services/Router/AdminRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRouter);
app.use(AdminRouter);

app.listen(5700, () => {
  Configure();
  console.log("Server is running...");
});
