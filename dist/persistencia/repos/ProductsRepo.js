"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ProductosRepo_dao;
Object.defineProperty(exports, "__esModule", { value: true });
const Product_js_1 = require("../modelos/Product.js");
const ProductsDaoFactory_js_1 = require("../factory/daos/Product/ProductsDaoFactory.js");
const ProductDTO_js_1 = require("../factory/dtos/ProductDTO.js");
let instancia = null;
class ProductosRepo {
    async generateId() {
        let arr = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").getAll();
        if (arr.length === 0) {
            return 1;
        }
        else {
            let id = arr[arr.length - 1].id;
            return parseInt(id) + 1;
        }
    }
    constructor() {
        _ProductosRepo_dao.set(this, void 0);
        __classPrivateFieldSet(this, _ProductosRepo_dao, ProductsDaoFactory_js_1.default.getDao(), "f");
    }
    async getAll() {
        const products = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").getAll();
        return products.map((p) => new Product_js_1.default(p));
    }
    async getById(idBuscado) {
        const dto = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").getById(idBuscado);
        return new Product_js_1.default(dto);
    }
    async add(prodNew) {
        prodNew.id = await this.generateId();
        let agregado = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").save((0, ProductDTO_js_1.asDto)(prodNew));
        return new Product_js_1.default(agregado);
    }
    async removeById(idBuscado) {
        const removida = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").deleteById(idBuscado);
        return new Product_js_1.default(removida);
    }
    async removeAll() {
        await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").deleteAll();
    }
    async updateById(idParaReemplazar, newProduct) {
        let updprod = await __classPrivateFieldGet(this, _ProductosRepo_dao, "f").updateById(idParaReemplazar, newProduct);
        return new Product_js_1.default(updprod);
    }
}
exports.default = ProductosRepo;
_ProductosRepo_dao = new WeakMap();
ProductosRepo.getInstancia = () => {
    if (!instancia)
        instancia = new ProductosRepo();
    return instancia;
};
//# sourceMappingURL=ProductsRepo.js.map