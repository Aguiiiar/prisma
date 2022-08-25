import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import ListProductService from "../services/ListProductService";

class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.handle();

    return response.json(products);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, bar_code, price } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.handle({ name, bar_code, price });

    return response.json(product);
  }
}

export default ProductController;
