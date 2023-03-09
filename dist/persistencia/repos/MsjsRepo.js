"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MsjsRepo_dao;
Object.defineProperty(exports, "__esModule", { value: true });
const Msj_js_1 = require("../modelos/Msj.js");
const MsjsDaoFactory_js_1 = require("../factory/daos/Msg/MsjsDaoFactory.js");
const MsgDTO_js_1 = require("../factory/dtos/MsgDTO.js");
let instancia = null;
class MsjsRepo {
    async generateId() {
        let arr = await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").getAll();
        if (arr.length === 0) {
            return 1;
        }
        else {
            let id = arr[arr.length - 1].id;
            return parseInt(id) + 1;
        }
    }
    constructor() {
        _MsjsRepo_dao.set(this, void 0);
        __classPrivateFieldSet(this, _MsjsRepo_dao, MsjsDaoFactory_js_1.default.getDao(), "f");
    }
    async getAll() {
        const msjs = await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").getAll();
        return msjs.map((m) => new Msj_js_1.default(m));
    }
    async getById(idBuscado) {
        const dto = await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").getById(idBuscado);
        return new Msj_js_1.default(dto);
    }
    async add(msjNew) {
        msjNew.setId(await this.generateId());
        await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").save((0, MsgDTO_js_1.asDto)(msjNew));
    }
    async removeById(idBuscado) {
        const removida = await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").deleteById(idBuscado);
        return new Msj_js_1.default(removida);
    }
    async removeAll() {
        await __classPrivateFieldGet(this, _MsjsRepo_dao, "f").deleteAll();
    }
}
exports.default = MsjsRepo;
_MsjsRepo_dao = new WeakMap();
MsjsRepo.getInstancia = () => {
    if (!instancia)
        instancia = new MsjsRepo();
    return instancia;
};
//# sourceMappingURL=MsjsRepo.js.map