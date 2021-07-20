import {ProductAbstract} from "./product.abstract";
import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export class FullCoverageImplement extends ProductAbstract{
    constructor(product: ProductInterface = { name: ProductNameEnum.FullCoverage, sellIn: 0, price: 0 }) {
        super(product);
    }

    public UpdatePrice(): void {
        this.sellIn -= 1
        if(this.price <= 50 && this.sellIn >= 0) {
            this.price += 1
        }

        if(this.price <= 50 && this.sellIn <= -1) {
            this.price += 2
        }

        if(this.price >= 50){
            this.price = 50
        }
    }
}