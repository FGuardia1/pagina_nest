export function asDto(prods: any): ProductDto | ProductDto[];
export class ProductDto {
    constructor({ title, price, thumbnail, id }: {
        title: any;
        price: any;
        thumbnail: any;
        id: any;
    });
    title: any;
    price: any;
    thumbnail: any;
    id: any;
}
