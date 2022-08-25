import ProductRepository from "../repositories/ProductRepository";

class ListProductService {
  public async handle() {
    const productRepository = new ProductRepository();

    const products = await productRepository.find();

    return products;
  }
}

export default ListProductService;
