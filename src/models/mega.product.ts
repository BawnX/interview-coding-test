import {ProductAbstract} from "./product.abstract";
import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export class MegaCoverageImplement extends ProductAbstract{
    constructor(product: ProductInterface = { name: ProductNameEnum.MegaCoverage, sellIn: 0, price: 80 }) {
        super(product);

        if (this.price !== 80)
            this.price = 80
    }

    public UpdatePrice(): void {
        if (this.sellIn > 1)
            this.sellIn -= 1
    }
}