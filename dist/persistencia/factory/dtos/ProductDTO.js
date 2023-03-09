"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asDto = exports.ProductDto = void 0;
class ProductDto {
    constructor({ title, price, thumbnail, id }) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }
}
exports.ProductDto = ProductDto;
function asDto(prods) {
    if (Array.isArray(prods))
        return prods.map((p) => new ProductDto(p));
    else
        return new ProductDto(prods);
}
exports.asDto = asDto;
//# sourceMappingURL=ProductDTO.js.map