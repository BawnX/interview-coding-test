import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import { MediumCoverageImplement } from "../../src/models/medium.product";
import {MegaCoverageImplement} from "../../src/models/mega.product";

describe('Product Mega Coverage', () => {
    it('check basic product', () => {
        const product = new MegaCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Mega Coverage')
        expect(product.GetProduct().price).equal(80)
        expect(product.GetProduct().sellIn).equal(0)
    })


    it('check product is initialization', () => {
        const product = new MegaCoverageImplement({name: ProductNameEnum.MegaCoverage, sellIn: -1, price: 80})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Mega Coverage')
        expect(product.GetProduct().sellIn).equal(-1)
        expect(product.GetProduct().price).equal(80)
    })

    it('check product price is sellIn positive', () => {
        const product = new MegaCoverageImplement({name: ProductNameEnum.MegaCoverage, sellIn: 10, price: 80})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Mega Coverage')
        expect(product.GetProduct().sellIn).equal(9)
        expect(product.GetProduct().price).equal(80)
    })

    it('check product price minor to 80', () => {
        const product = new MegaCoverageImplement({name: ProductNameEnum.MegaCoverage, sellIn: -3, price: 40})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Mega Coverage')
        expect(product.GetProduct().sellIn).equal(-3)
        expect(product.GetProduct().price).equal(80)
    })
})