import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';

@Injectable()
export class ProductsService {
  private storeProducts = [];
  getProducts(): IProduct[] {
    return this.storeProducts;
  }
  createProduct(product: CreateProductDto): IProduct {
    this.storeProducts.push(product);
    return product;
  }
}
