import { Product } from "@prisma/client";
import prismaClient from "../../../shared/database/prismaClient";

interface IProduct {
  name: string;
  bar_code: string;
  price: number;
}
class CreateProductService {
  public async handle({ name, bar_code, price }: IProduct): Promise<Product> {
    const product = await prismaClient.product.create({
      data: {
        name,
        bar_code,
        price,
      },
    });

    return product;
  }
}

export default CreateProductService;
