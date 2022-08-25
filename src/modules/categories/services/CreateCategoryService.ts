import { Category } from "@prisma/client";
import prismaClient from "../../../shared/database/prismaClient";

class CreateCategoryService {
  public async handle(name: string): Promise<Category> {
    const category = await prismaClient.category.create({ data: { name } });

    return category;
  }
}

export default CreateCategoryService;
