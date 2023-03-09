"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MsjsDaoMem_instances, _MsjsDaoMem_getIndex;
Object.defineProperty(exports, "__esModule", { value: true });
const MsgDTO_js_1 = require("../../dtos/MsgDTO.js");
class MsjsDaoMem {
    constructor() {
        _MsjsDaoMem_instances.add(this);
        this.msjs = [];
    }
    init() {
        console.log("productos dao en memoria -> listo");
    }
    disconnect() {
        console.log("productos dao en memoria -> cerrado");
    }
    getAll() {
        return (0, MsgDTO_js_1.asDto)(this.msjs);
    }
    getById(idBuscado) {
        return (0, MsgDTO_js_1.asDto)(this.msjs[__classPrivateFieldGet(this, _MsjsDaoMem_instances, "m", _MsjsDaoMem_getIndex).call(this, idBuscado)]);
    }
    save(newMsj) {
        this.msjs.push(newMsj);
        return (0, MsgDTO_js_1.asDto)(newMsj);
    }
    deleteById(idParaBorrar) {
        const [borrada] = this.msjs.splice(__classPrivateFieldGet(this, _MsjsDaoMem_instances, "m", _MsjsDaoMem_getIndex).call(this, idParaBorrar), 1);
        return (0, MsgDTO_js_1.asDto)(borrada);
    }
    deleteAll() {
        this.msjs = [];
    }
    updateById(idParaReemplazar, newMsj) {
        const index = __classPrivateFieldGet(this, _MsjsDaoMem_instances, "m", _MsjsDaoMem_getIndex).call(this, idParaReemplazar);
        const actualizada = Object.assign(Object.assign({}, this.msjs[index]), newMsj);
        this.msjs.splice(index, 1, actualizada);
        return (0, MsgDTO_js_1.asDto)(actualizada);
    }
}
exports.default = MsjsDaoMem;
_MsjsDaoMem_instances = new WeakSet(), _MsjsDaoMem_getIndex = function _MsjsDaoMem_getIndex(id) {
    return this.msjs.findIndex((msj) => msj.id === id);
};
//# sourceMappingURL=MsjsDaoMem.js.map