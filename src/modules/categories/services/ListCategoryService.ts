import CategoryRepository from "../repositories/CategoryRepository";

class ListCategoryService {
  public async handle() {
    const listCategory = new CategoryRepository();

    const categories = await listCategory.find();

    return categories;
  }
}

export default ListCategoryService;
