import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/product.dto';
import { IProduct } from 'src/interface/product.interface';
import ProductosRepo from '../persistencia/repos/ProductsRepo';

const prodsRepo = ProductosRepo.getInstancia();

@Injectable()
export class ProductsService {
  async getProducts(): Promise<IProduct[]> {
    let prods = await prodsRepo.getAll();
    return prods;
  }
  async createProduct(product: CreateProductDto): Promise<IProduct> {
    let prodAdd = await prodsRepo.add(product);

    return prodAdd;
  }

  async deleteProduct(id) {
    let resp = await prodsRepo.removeById(id);
    return resp;
  }

  async updateProduct(idParaReemplazar, prodMod) {
    let resp = await prodsRepo.updateById(idParaReemplazar, prodMod);
    return resp;
  }
}
