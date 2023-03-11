import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
export declare class ProductsService {
    getProducts(): Promise<IProduct[]>;
    createProduct(product: CreateProductDto): Promise<IProduct>;
    deleteProduct(id: string): Promise<IProduct>;
    updateProduct(idParaReemplazar: string, prodMod: CreateProductDto): Promise<IProduct>;
}
