export default class MsjsDaoFile {
    constructor(ruta: any);
    ruta: any;
    msjs: any[];
    init(): Promise<void>;
    disconnect(): void;
    getAll(): Promise<import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[]>;
    getById(idBuscado: any): Promise<import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[]>;
    save(newMsjs: any): Promise<import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[]>;
    deleteById(idParaBorrar: any): Promise<import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[]>;
    deleteAll(): Promise<void>;
    updateById(idParaReemplazar: any, newMsj: any): Promise<import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[]>;
    #private;
}
