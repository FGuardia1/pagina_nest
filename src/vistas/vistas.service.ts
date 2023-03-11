import { Injectable } from '@nestjs/common';
import ProductosRepo from 'src/persistencia/repos/ProductsRepo';
const prodsRepo = ProductosRepo.getInstancia();
import MsjsRepo from 'src/persistencia/repos/MsjsRepo';

const msjsRepo = MsjsRepo.getInstancia();
@Injectable()
export class VistasService {
  async getHomeInfo() {
    let prods = await prodsRepo.getAll();
    let msjs = await msjsRepo.getAll();
    msjs = msjs.map((e) => {
      e.date = new Date(e.date).toLocaleString();
      return e;
    });
    return { productos: prods, msjs };
  }
}
