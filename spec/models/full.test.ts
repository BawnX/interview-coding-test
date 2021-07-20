import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import {FullCoverageImplement} from "../../src/models/full.product";

describe('Product Full Coverage', () => {
    it('check basic product', () => {
        const product = new FullCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Full Coverage')
        expect(product.GetProduct().price).equal(2)
        expect(product.GetProduct().sellIn).equal(-1)
    })


    it('check product is initialization', () => {
        const product = new FullCoverageImplement({ name: ProductNameEnum.FullCoverage, sellIn: 2, price: 54})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Full Coverage')
        expect(product.GetProduct().price).equal(50)
        expect(product.GetProduct().sellIn).equal(1)
    })

    it('check product is major to cero and price minor to fifty', () => {
        const product = new FullCoverageImplement({ name: ProductNameEnum.FullCoverage, sellIn: 2, price: 40})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Full Coverage')
        expect(product.GetProduct().price).equal(41)
        expect(product.GetProduct().sellIn).equal(1)
    })
})