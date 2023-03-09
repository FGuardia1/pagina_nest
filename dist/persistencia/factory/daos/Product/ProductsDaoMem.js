"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductsDaoMem_instances, _ProductsDaoMem_getIndex;
Object.defineProperty(exports, "__esModule", { value: true });
const ProductDTO_js_1 = require("../../dtos/ProductDTO.js");
class ProductsDaoMem {
    constructor() {
        _ProductsDaoMem_instances.add(this);
        this.products = [];
    }
    init() {
        console.log("productos dao en memoria -> listo");
    }
    disconnect() {
        console.log("productos dao en memoria -> cerrado");
    }
    getAll() {
        return (0, ProductDTO_js_1.asDto)(this.products);
    }
    getById(idBuscado) {
        return (0, ProductDTO_js_1.asDto)(this.products[__classPrivateFieldGet(this, _ProductsDaoMem_instances, "m", _ProductsDaoMem_getIndex).call(this, idBuscado)]);
    }
    save(newProduct) {
        this.products.push(newProduct);
        return (0, ProductDTO_js_1.asDto)(newProduct);
    }
    deleteById(idParaBorrar) {
        const [borrada] = this.products.splice(__classPrivateFieldGet(this, _ProductsDaoMem_instances, "m", _ProductsDaoMem_getIndex).call(this, idParaBorrar), 1);
        return (0, ProductDTO_js_1.asDto)(borrada);
    }
    deleteAll() {
        this.products = [];
    }
    updateById(idParaReemplazar, newProduct) {
        const index = __classPrivateFieldGet(this, _ProductsDaoMem_instances, "m", _ProductsDaoMem_getIndex).call(this, idParaReemplazar);
        const actualizada = Object.assign(Object.assign({}, this.products[index]), newProduct);
        this.products.splice(index, 1, actualizada);
        return (0, ProductDTO_js_1.asDto)(actualizada);
    }
}
exports.default = ProductsDaoMem;
_ProductsDaoMem_instances = new WeakSet(), _ProductsDaoMem_getIndex = function _ProductsDaoMem_getIndex(id) {
    return this.products.findIndex((product) => product.id === id);
};
//# sourceMappingURL=ProductsDaoMem.js.map