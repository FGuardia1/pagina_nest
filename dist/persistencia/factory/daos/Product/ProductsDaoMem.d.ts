export default class ProductsDaoMem {
    products: any[];
    init(): void;
    disconnect(): void;
    getAll(): import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[];
    getById(idBuscado: any): import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[];
    save(newProduct: any): import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[];
    deleteById(idParaBorrar: any): import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[];
    deleteAll(): void;
    updateById(idParaReemplazar: any, newProduct: any): import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[];
    #private;
}
