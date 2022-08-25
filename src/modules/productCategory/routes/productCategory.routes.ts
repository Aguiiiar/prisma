import { Router } from "express";
import ProductCategoryController from "../controller/ProductCategoryController";
import ProductCategoryExistCategoryController from "../controller/ProductCategoryExistCategoryController";

const productCategoryRouter = Router();
const productCategoryController = new ProductCategoryController();
const productCategoryExistCategoryController =
  new ProductCategoryExistCategoryController();

productCategoryRouter.post("/", productCategoryController.create);
productCategoryRouter.post(
  "/productiWithCategory",
  productCategoryExistCategoryController.create
);

export default productCategoryRouter;
