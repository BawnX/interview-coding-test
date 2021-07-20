import {ProductAbstract} from "./product.abstract";
import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export class SpecialFullCoverageImplement extends ProductAbstract{
    constructor(product: ProductInterface = { name: ProductNameEnum.SpecialFullCoverage, sellIn: 0, price: 0 }) {
        super(product);
    }

    public UpdatePrice(): void {
        this.sellIn -= 1

        if(this.sellIn < 0) {
            this.price = 0
            return;
        }

        if(this.sellIn <= 5 && this.sellIn >= 0) {
            this.price += 3
        }

        if(this.sellIn <= 10 && this.sellIn >= 6) {
            this.price += 2
        }

        if(this.price >= 50 ) {
            this.price = 50
            return;
        }

        this.price+=1;
    }
}
