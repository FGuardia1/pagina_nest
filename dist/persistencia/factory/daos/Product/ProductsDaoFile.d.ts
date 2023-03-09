export default class ProductsDaoFile {
    constructor(ruta: any);
    ruta: any;
    productos: any[];
    init(): Promise<void>;
    disconnect(): void;
    getAll(): Promise<import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[]>;
    getById(idBuscado: any): Promise<import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[]>;
    save(newProd: any): Promise<import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[]>;
    deleteById(idParaBorrar: any): Promise<import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[]>;
    deleteAll(): Promise<void>;
    updateById(idParaReemplazar: any, newProduct: any): Promise<import("../../dtos/ProductDTO.js").ProductDto | import("../../dtos/ProductDTO.js").ProductDto[]>;
    #private;
}
