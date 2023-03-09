export default class MsjsRepo {
    static getInstancia: () => any;
    generateId(): Promise<number>;
    getAll(): Promise<any>;
    getById(idBuscado: any): Promise<Msj>;
    add(msjNew: any): Promise<void>;
    removeById(idBuscado: any): Promise<Msj>;
    removeAll(): Promise<void>;
    #private;
}
import Msj from "../modelos/Msj.js";
