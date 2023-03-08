import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(): IProduct[];
    setProduct(newProduct: CreateProductDto): IProduct;
}
