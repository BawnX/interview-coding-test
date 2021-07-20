import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import { LowCoverageImplement } from "../../src/models/low.product";

describe('Product Low Coverage', () => {
    it('check basic product', () => {
        const product = new LowCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Low Coverage')
        expect(product.GetProduct().price).equal(0)
        expect(product.GetProduct().sellIn).equal(-1)
    })


    it('check product is initialization', () => {
        const product = new LowCoverageImplement({name:  ProductNameEnum.LowCoverage, sellIn: 5, price: 7})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Low Coverage')
        expect(product.GetProduct().price).equal(6)
        expect(product.GetProduct().sellIn).equal(4)
    })
})