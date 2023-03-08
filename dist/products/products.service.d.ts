import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
export declare class ProductsService {
    private storeProducts;
    getProducts(): IProduct[];
    createProduct(product: CreateProductDto): IProduct;
}
