export default class Msj {
    constructor({ email, texto, date, nombre, apellido, edad, alias, avatar }: {
        email: any;
        texto: any;
        date: any;
        nombre: any;
        apellido: any;
        edad: any;
        alias: any;
        avatar: any;
    });
    id: string;
    email: any;
    nombre: any;
    apellido: any;
    edad: any;
    alias: any;
    avatar: any;
    texto: any;
    date: any;
    setId(id: any): void;
}
