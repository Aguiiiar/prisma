import { Request, Response } from "express";
import CreateProductCategoryService from "../services/CreateProductCategoryService";

class ProductCategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { productId, categoryId } = request.body;

    const createProductCategory = new CreateProductCategoryService();

    const productCategory = createProductCategory.handle({
      productId,
      categoryId,
    });

    return response.json(productCategory);
  }
}

export default ProductCategoryController;
