import {ProductAbstract} from "./product.abstract";
import {ProductInterface, ProductNameEnum} from "../interfaces/product.interface";

export class SuperSaleCoverageImplement extends ProductAbstract{
    constructor(product: ProductInterface = { name: ProductNameEnum.SuperSaleCoverage, sellIn: 0, price: 0 }) {
        super(product);
    }

    public UpdatePrice(): void {
        this.sellIn -= 1

        if(this.price >= 3){
            this.price -= 1
        }

        if(this.price < 3) {
            this.price -= 2
        }

        if(this.price <= 0) {
            this.price = 0
        }
    }
}