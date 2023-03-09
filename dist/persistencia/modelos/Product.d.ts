export default class Producto {
    constructor({ title, price, thumbnail, id }: {
        title: any;
        price: any;
        thumbnail: any;
        id?: string;
    });
    title: any;
    price: any;
    thumbnail: any;
    id: string;
    setId(id: any): void;
    #private;
}
