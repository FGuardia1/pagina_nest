"use strict";
var _Producto_title, _Producto_price, _Producto_thumbnail, _Producto_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor({ title, price, thumbnail, id = "" }) {
        _Producto_title.set(this, void 0);
        _Producto_price.set(this, void 0);
        _Producto_thumbnail.set(this, void 0);
        _Producto_id.set(this, void 0);
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }
    setId(id) {
        if (!id)
            throw new Error('"id" es un campo requerido');
        this.id = id;
    }
}
exports.default = Producto;
_Producto_title = new WeakMap(), _Producto_price = new WeakMap(), _Producto_thumbnail = new WeakMap(), _Producto_id = new WeakMap();
//# sourceMappingURL=Product.js.map