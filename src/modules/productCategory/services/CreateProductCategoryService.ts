import { ProductCategory } from "@prisma/client";
import prismaClient from "../../../shared/database/prismaClient";

interface IProductCategory {
    productId: string;
  categoryId: string;
}

class CreateProductCategoryService {
  async handle({
    categoryId,
    productId,
  }: IProductCategory): Promise<ProductCategory> {
    const productCategory = await prismaClient.productCategory.create({
      data: {
        categoryId,
        productId,
      },
    });

    return productCategory;
  }
}

export default CreateProductCategoryService;
