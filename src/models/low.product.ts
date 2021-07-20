import {ProductAbstract} from "./product.abstract";
import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export class LowCoverageImplement extends ProductAbstract{
    constructor(product: ProductInterface = { name: ProductNameEnum.LowCoverage, sellIn: 0, price: 0 }) {
        super(product);
    }

    public UpdatePrice(): void {
        this.sellIn -= 1
        if(this.sellIn < 0) {
            this.price -= 2
        }

        if(this.sellIn < 0 ){
            this.price = 0
            return
        }

        this.price -=1
    }
}