import { Router } from "express";
import ProductController from "../controller/ProductController";

const productRouter = Router();
const productController = new ProductController();

productRouter.post("/", productController.create);
productRouter.get("/", productController.index);

export default productRouter;
