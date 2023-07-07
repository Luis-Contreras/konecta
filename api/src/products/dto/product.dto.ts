export class ProductDto {
    readonly name_product: string;
    readonly reference: string;
    readonly price: number;
    readonly weight: number;
    readonly category: string;
    readonly stock: number;
    readonly lastSale?: string;
}