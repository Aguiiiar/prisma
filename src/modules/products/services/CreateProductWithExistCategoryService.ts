import { ProductCategory } from "@prisma/client";
import prismaClient from "../../../shared/database/prismaClient";

interface IProduct {
  name: string;
  bar_code: string;
  price: number;

  categoryId: string;
}
class CreateProductWithExistCategoryService {
  public async handle({
    name,
    bar_code,
    price,
    categoryId,
  }: IProduct): Promise<ProductCategory> {
    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: { name, bar_code, price },
        },
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    return product;
  }
}

CreateProductWithExistCategoryService;
