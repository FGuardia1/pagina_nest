import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(): Promise<IProduct[]>;
    setProduct(newProduct: CreateProductDto): Promise<IProduct>;
    deleteProduct(id: string): Promise<IProduct>;
    updateProduct(id: string, updProduct: CreateProductDto): Promise<IProduct>;
}
