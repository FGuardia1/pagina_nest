export default class MsjsDaoMem {
    msjs: any[];
    init(): void;
    disconnect(): void;
    getAll(): import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[];
    getById(idBuscado: any): import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[];
    save(newMsj: any): import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[];
    deleteById(idParaBorrar: any): import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[];
    deleteAll(): void;
    updateById(idParaReemplazar: any, newMsj: any): import("../../dtos/MsgDTO.js").MsjDto | import("../../dtos/MsgDTO.js").MsjDto[];
    #private;
}
