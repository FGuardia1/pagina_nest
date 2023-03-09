"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductsDaoFile_instances, _ProductsDaoFile_leerArchivo, _ProductsDaoFile_escribirArchivo, _ProductsDaoFile_getIndex;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ProductDTO_js_1 = require("../../dtos/ProductDTO.js");
class ProductsDaoFile {
    constructor(ruta) {
        _ProductsDaoFile_instances.add(this);
        this.ruta = ruta;
        this.productos = [];
    }
    async init() {
        try {
            await fs_1.promises.readFile(this.ruta, 'utf-8');
        }
        catch (error) {
            await fs_1.promises.writeFile(this.ruta, '[]');
        }
    }
    disconnect() {
        console.log('productos dao en archivo -> cerrado');
    }
    async getAll() {
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_leerArchivo).call(this);
        return (0, ProductDTO_js_1.asDto)(this.productos);
    }
    async getById(idBuscado) {
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_leerArchivo).call(this);
        return (0, ProductDTO_js_1.asDto)(this.productos[__classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_getIndex).call(this, idBuscado)]);
    }
    async save(newProd) {
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_leerArchivo).call(this);
        this.productos.push(newProd);
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_escribirArchivo).call(this);
        return (0, ProductDTO_js_1.asDto)(newProd);
    }
    async deleteById(idParaBorrar) {
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_leerArchivo).call(this);
        const [borrada] = this.productos.splice(__classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_getIndex).call(this, idParaBorrar), 1);
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_escribirArchivo).call(this);
        return (0, ProductDTO_js_1.asDto)(borrada);
    }
    async deleteAll() {
        this.productos = [];
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_escribirArchivo).call(this);
    }
    async updateById(idParaReemplazar, newProduct) {
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_leerArchivo).call(this);
        const index = __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_getIndex).call(this, idParaReemplazar);
        const actualizada = Object.assign(Object.assign({}, this.productos[index]), newProduct);
        this.productos.splice(index, 1, actualizada);
        await __classPrivateFieldGet(this, _ProductsDaoFile_instances, "m", _ProductsDaoFile_escribirArchivo).call(this);
        return (0, ProductDTO_js_1.asDto)(actualizada);
    }
}
exports.default = ProductsDaoFile;
_ProductsDaoFile_instances = new WeakSet(), _ProductsDaoFile_leerArchivo = async function _ProductsDaoFile_leerArchivo() {
    const texto = await fs_1.promises.readFile(this.ruta, 'utf-8');
    this.productos = JSON.parse(texto);
}, _ProductsDaoFile_escribirArchivo = async function _ProductsDaoFile_escribirArchivo() {
    const texto = JSON.stringify(this.productos, null, 2);
    await fs_1.promises.writeFile(this.ruta, texto);
}, _ProductsDaoFile_getIndex = function _ProductsDaoFile_getIndex(id) {
    return this.productos.findIndex((productos) => productos.id == id);
};
//# sourceMappingURL=ProductsDaoFile.js.map