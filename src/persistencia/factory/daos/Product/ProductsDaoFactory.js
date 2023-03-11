import ProductsDaoFile from './ProductsDaoFile.js';
import ProductsDaoMem from './ProductsDaoMem.js';

import * as dotenv from 'dotenv';
dotenv.config();

const OPCION_DAO = process.env.OPCION_DAO;
const rutaArchivoProds = './src/persistencia/dbs/products.txt';
let dao;

async function switch_inicio() {
  switch (OPCION_DAO) {
    case 'File':
      dao = new ProductsDaoFile(rutaArchivoProds);
      await dao.init();
      break;
    default:
      dao = new ProductsDaoMem();
  }
}
switch_inicio();

export default class ProductsDaoFactory {
  static getDao() {
    return dao;
  }
}
