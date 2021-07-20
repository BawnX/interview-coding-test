import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export abstract class ProductAbstract {
    private readonly name: ProductNameEnum;
    protected price: number;
    protected sellIn: number;

    protected constructor(product: ProductInterface) {
        this.name = product.name;
        this.price = product.price;
        this.sellIn = product.sellIn;
    }

    public ConsoleProduct(): void {
        console.log(`${this.name}, ${this.sellIn}, ${this.price}`)
    }

    public GetProduct():ProductInterface{
        return {
            name: this.name,
            sellIn: this.sellIn,
            price: this.price,
        }
    }

    abstract UpdatePrice(): void
}
