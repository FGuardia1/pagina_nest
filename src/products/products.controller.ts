import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  //@UseGuards(JwtAuthGuard)
  getProducts(): Promise<IProduct[]> {
    return this.productService.getProducts();
  }
  @Post()
  setProduct(@Body() newProduct: CreateProductDto): Promise<IProduct> {
    return this.productService.createProduct(newProduct);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() updProduct: CreateProductDto) {
    return this.productService.updateProduct(id, updProduct);
  }
}
