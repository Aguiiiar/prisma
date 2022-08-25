import { Request, Response } from "express";
import CreateCategoryService from "../services/CreateCategoryService";
import ListCategoryService from "../services/ListCategoryService";

class CategoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = new ListCategoryService();

    const categories = await listCategories.handle();

    return response.json(categories);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.handle(name);

    return response.json(category);
  }
}

export default CategoryController;
