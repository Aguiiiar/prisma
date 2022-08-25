import { Router } from "express";
import CategoryController from "../controller/CategoryController";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post("/", categoryController.create);
categoryRouter.get("/", categoryController.index);

export default categoryRouter;
