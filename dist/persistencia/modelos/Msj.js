"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Msj {
    constructor({ email, texto, date, nombre, apellido, edad, alias, avatar, id = '', }) {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.alias = alias;
        this.avatar = avatar;
        this.texto = texto;
        this.date = date;
    }
    setId(id) {
        if (!id)
            throw new Error('"id" es un campo requerido');
        this.id = id;
    }
}
exports.default = Msj;
//# sourceMappingURL=Msj.js.map