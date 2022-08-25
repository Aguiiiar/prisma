import prismaClient from "../../../shared/database/prismaClient";

class ProductRepository {
  public async find() {
    const product = await prismaClient.product.findMany({
      include: {
        ProductCategory: {
          include: {
            category: true,
          },
        },
      },
    });

    return product;
  }
}

export default ProductRepository;
