"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MsjsDaoFile_js_1 = require("./MsjsDaoFile.js");
const MsjsDaoMem_js_1 = require("./MsjsDaoMem.js");
const rutaArchivoProds = './src/persistencia/dbs/msjs.txt';
const OPCION_DAO = 'File';
let dao;
async function switch_inicio() {
    switch (OPCION_DAO) {
        case 'File':
            dao = new MsjsDaoFile_js_1.default(rutaArchivoProds);
            await dao.init();
            break;
        default:
            dao = new MsjsDaoMem_js_1.default();
    }
}
switch_inicio();
class MsjsDaoFactory {
    static getDao() {
        return dao;
    }
}
exports.default = MsjsDaoFactory;
//# sourceMappingURL=MsjsDaoFactory.js.map