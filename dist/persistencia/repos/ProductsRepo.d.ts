export default class ProductosRepo {
    static getInstancia: () => any;
    generateId(): Promise<number>;
    getAll(): Promise<any>;
    getById(idBuscado: any): Promise<Producto>;
    add(prodNew: any): Promise<Producto>;
    removeById(idBuscado: any): Promise<Producto>;
    removeAll(): Promise<void>;
    updateById(idParaReemplazar: any, newProduct: any): Promise<Producto>;
    #private;
}
import Producto from "../modelos/Product.js";
