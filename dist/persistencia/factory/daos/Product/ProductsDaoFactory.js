"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsDaoFile_js_1 = require("./ProductsDaoFile.js");
const ProductsDaoMem_js_1 = require("./ProductsDaoMem.js");
const dotenv = require("dotenv");
dotenv.config();
const OPCION_DAO = process.env.OPCION_DAO;
const rutaArchivoProds = './src/persistencia/dbs/products.txt';
console.log('opcion es ' + OPCION_DAO);
let dao;
async function switch_inicio() {
    switch (OPCION_DAO) {
        case 'File':
            dao = new ProductsDaoFile_js_1.default(rutaArchivoProds);
            await dao.init();
            break;
        default:
            dao = new ProductsDaoMem_js_1.default();
    }
}
switch_inicio();
class ProductsDaoFactory {
    static getDao() {
        return dao;
    }
}
exports.default = ProductsDaoFactory;
//# sourceMappingURL=ProductsDaoFactory.js.map