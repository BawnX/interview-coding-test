import {ProductNameEnum} from "./interfaces/product.interface";
import {ProductAbstract} from "./models/product.abstract";
import {LowCoverageImplement} from "./models/low.product";
import {MediumCoverageImplement} from "./models/medium.product";
import {FullCoverageImplement} from "./models/full.product";
import {MegaCoverageImplement} from "./models/mega.product";
import {SpecialFullCoverageImplement} from "./models/special.product";
import {SuperSaleCoverageImplement} from "./models/super.product";

const carInsurance: Array<ProductAbstract> = [
    new MediumCoverageImplement({name: ProductNameEnum.MediumCoverage, sellIn: 10, price: 20}),
    new FullCoverageImplement({ name: ProductNameEnum.FullCoverage, sellIn: 2, price: 0}),
    new LowCoverageImplement({name:  ProductNameEnum.LowCoverage, sellIn: 5, price: 7}),
    new MegaCoverageImplement(),
    new MegaCoverageImplement({name: ProductNameEnum.MegaCoverage, sellIn: -1, price: 80}),
    new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 15, price: 20}),
    new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 10, price: 49}),
    new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 5, price: 49}),
    new SuperSaleCoverageImplement({name: ProductNameEnum.SuperSaleCoverage, sellIn: 3, price: 6})
]

for(let i = 1; i<=30; i+=1){
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.forEach(product => {
        product.UpdatePrice();
        product.ConsoleProduct();
    })
    console.log('');
}