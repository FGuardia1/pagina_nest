import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
export declare class ProductsService {
    private storeProducts;
    getProducts(): Promise<IProduct[]>;
    createProduct(product: CreateProductDto): Promise<IProduct>;
    deleteProduct(id: any): Promise<any>;
    updateProduct(idParaReemplazar: any, prodMod: any): Promise<any>;
}
