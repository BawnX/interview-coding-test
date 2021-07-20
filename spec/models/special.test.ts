import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import {SpecialFullCoverageImplement} from "../../src/models/special.product";

describe('Product Special Coverage', () => {
    it('check basic product', () => {
        const product = new SpecialFullCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Special Full Coverage')
        expect(product.GetProduct().price).equal(0)
        expect(product.GetProduct().sellIn).equal(-1)
    })


    it('check product is initialization', () => {
        const product = new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 15, price: 20})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Special Full Coverage')
        expect(product.GetProduct().sellIn).equal(14)
        expect(product.GetProduct().price).equal(21)
    })

    it('check product price plus 3', () => {
        const product = new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 10, price: -2})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Special Full Coverage')
        expect(product.GetProduct().sellIn).equal(9)
        expect(product.GetProduct().price).equal(1)
    })

    it('check product price price to 50', () => {
        const product = new SpecialFullCoverageImplement({name: ProductNameEnum.SpecialFullCoverage, sellIn: 6, price: 70})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Special Full Coverage')
        expect(product.GetProduct().sellIn).equal(5)
        expect(product.GetProduct().price).equal(50)
    })
})