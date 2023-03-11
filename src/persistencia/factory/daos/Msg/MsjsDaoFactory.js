import MsjsDaoFile from './MsjsDaoFile.js';
import MsjsDaoMem from './MsjsDaoMem.js';
const rutaArchivoProds = './src/persistencia/dbs/msjs.txt';

import * as dotenv from 'dotenv';
dotenv.config();

const OPCION_DAO = process.env.OPCION_DAO;

let dao;

async function switch_inicio() {
  switch (OPCION_DAO) {
    case 'File':
      dao = new MsjsDaoFile(rutaArchivoProds);
      await dao.init();
      break;
    default:
      dao = new MsjsDaoMem();
  }
}
switch_inicio();

export default class MsjsDaoFactory {
  static getDao() {
    return dao;
  }
}
