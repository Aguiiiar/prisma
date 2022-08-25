import { Router } from "express";
import categoryRouter from "../modules/categories/routes/category.routes";
import productCategoryRouter from "../modules/productCategory/routes/productCategory.routes";
import productRouter from "../modules/products/routes/product.routes";
const routes = Router();

routes.use("/product", productRouter);
routes.use("/productCategory", productCategoryRouter);
routes.use("/category", categoryRouter);

export default routes;
