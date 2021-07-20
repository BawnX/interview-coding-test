import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import { MediumCoverageImplement } from "../../src/models/medium.product";

describe('Product Medium Coverage', () => {
    it('check basic product', () => {
        const product = new MediumCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Medium Coverage')
        expect(product.GetProduct().price).equal(0)
        expect(product.GetProduct().sellIn).equal(-1)
    })


    it('check product is initialization', () => {
        const product = new MediumCoverageImplement({name: ProductNameEnum.MediumCoverage, sellIn: 10, price: 20})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Medium Coverage')
        expect(product.GetProduct().sellIn).equal(9)
        expect(product.GetProduct().price).equal(19)
    })

    it('check product price is minor of 0', () => {
        const product = new MediumCoverageImplement({name: ProductNameEnum.MediumCoverage, sellIn: 10, price: -2})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Medium Coverage')
        expect(product.GetProduct().sellIn).equal(9)
        expect(product.GetProduct().price).equal(0)
    })

    it('check product price decreased in two', () => {
        const product = new MediumCoverageImplement({name: ProductNameEnum.MediumCoverage, sellIn: -3, price: 40})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Medium Coverage')
        expect(product.GetProduct().sellIn).equal(-4)
        expect(product.GetProduct().price).equal(38)
    })
})