import prismaClient from "../../../shared/database/prismaClient";

class CategoryRepository {
  public async find() {
    const category = await prismaClient.category.findMany({
      include: {
        ProductCategory: true,
      },
    });

    return category;
  }
}

export default CategoryRepository;
