import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(): IProduct[] {
    return this.productService.getProducts();
  }
  @Post()
  setProduct(@Body() newProduct: CreateProductDto): IProduct {
    return this.productService.createProduct(newProduct);
  }
}
