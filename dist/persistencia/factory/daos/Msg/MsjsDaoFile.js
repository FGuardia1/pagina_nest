"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MsjsDaoFile_instances, _MsjsDaoFile_leerArchivo, _MsjsDaoFile_escribirArchivo, _MsjsDaoFile_getIndex;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const MsgDTO_js_1 = require("../../dtos/MsgDTO.js");
class MsjsDaoFile {
    constructor(ruta) {
        _MsjsDaoFile_instances.add(this);
        this.ruta = ruta;
        this.msjs = [];
    }
    async init() {
        try {
            await fs_1.promises.readFile(this.ruta, 'utf-8');
        }
        catch (error) {
            await fs_1.promises.writeFile(this.ruta, '[]');
        }
    }
    disconnect() {
        console.log('productos dao en archivo -> cerrado');
    }
    async getAll() {
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_leerArchivo).call(this);
        return (0, MsgDTO_js_1.asDto)(this.msjs);
    }
    async getById(idBuscado) {
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_leerArchivo).call(this);
        return (0, MsgDTO_js_1.asDto)(this.msjs[__classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_getIndex).call(this, idBuscado)]);
    }
    async save(newMsjs) {
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_leerArchivo).call(this);
        this.msjs.push(newMsjs);
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_escribirArchivo).call(this);
        return (0, MsgDTO_js_1.asDto)(newMsjs);
    }
    async deleteById(idParaBorrar) {
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_leerArchivo).call(this);
        const [borrada] = this.msjs.splice(__classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_getIndex).call(this, idParaBorrar), 1);
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_escribirArchivo).call(this);
        return (0, MsgDTO_js_1.asDto)(borrada);
    }
    async deleteAll() {
        this.msjs = [];
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_escribirArchivo).call(this);
    }
    async updateById(idParaReemplazar, newMsj) {
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_leerArchivo).call(this);
        const index = __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_getIndex).call(this, idParaReemplazar);
        const actualizada = Object.assign(Object.assign({}, this.msjs[index]), newMsj);
        this.msjs.splice(index, 1, actualizada);
        await __classPrivateFieldGet(this, _MsjsDaoFile_instances, "m", _MsjsDaoFile_escribirArchivo).call(this);
        return (0, MsgDTO_js_1.asDto)(actualizada);
    }
}
exports.default = MsjsDaoFile;
_MsjsDaoFile_instances = new WeakSet(), _MsjsDaoFile_leerArchivo = async function _MsjsDaoFile_leerArchivo() {
    const texto = await fs_1.promises.readFile(this.ruta, 'utf-8');
    this.msjs = JSON.parse(texto);
}, _MsjsDaoFile_escribirArchivo = async function _MsjsDaoFile_escribirArchivo() {
    const texto = JSON.stringify(this.msjs, null, 2);
    await fs_1.promises.writeFile(this.ruta, texto);
}, _MsjsDaoFile_getIndex = function _MsjsDaoFile_getIndex(id) {
    return this.msjs.findIndex((msjs) => msjs.id === id);
};
//# sourceMappingURL=MsjsDaoFile.js.map