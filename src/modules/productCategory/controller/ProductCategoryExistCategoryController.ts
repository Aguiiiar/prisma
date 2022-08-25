import { Request, Response } from "express";
import CreateProductWithExistCategoryService from "../services/CreateProductWithExistCategoryService";

class ProductCategoryExistCategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, bar_code, price, categoryId } = request.body;

    const createProduct = new CreateProductWithExistCategoryService();

    const product = await createProduct.handle({
      name,
      bar_code,
      price,
      categoryId,
    });

    return response.json(product);
  }
}

export default ProductCategoryExistCategoryController;
