export function asDto(msjs: any): MsjDto | MsjDto[];
export class MsjDto {
    constructor({ id, nombre, apellido, edad, alias, avatar, email, texto, date, }: {
        id: any;
        nombre: any;
        apellido: any;
        edad: any;
        alias: any;
        avatar: any;
        email: any;
        texto: any;
        date: any;
    });
    id: any;
    nombre: any;
    apellido: any;
    edad: any;
    alias: any;
    avatar: any;
    email: any;
    texto: any;
    date: any;
}
