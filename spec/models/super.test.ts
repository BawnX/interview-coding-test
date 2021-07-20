import { expect } from 'chai';
import { ProductNameEnum } from "../../src/interfaces/product.interface";
import {SuperSaleCoverageImplement} from "../../src/models/super.product";

describe('Product Super Sale', () => {
    it('check basic product', () => {
        const product = new SuperSaleCoverageImplement()
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Super Sale')
        expect(product.GetProduct().price).equal(0)
        expect(product.GetProduct().sellIn).equal(-1)
    })


    it('check product is initialization', () => {
        const product = new SuperSaleCoverageImplement({name: ProductNameEnum.SuperSaleCoverage, sellIn: 3, price: 6})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Super Sale')
        expect(product.GetProduct().sellIn).equal(2)
        expect(product.GetProduct().price).equal(5)
    })

    it('check product price is negative to cero', () => {
        const product = new SuperSaleCoverageImplement({name: ProductNameEnum.SuperSaleCoverage, sellIn: 10, price: -2})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Super Sale')
        expect(product.GetProduct().sellIn).equal(9)
        expect(product.GetProduct().price).equal(0)
    })

    it('check product price is minium 1', () => {
        const product = new SuperSaleCoverageImplement({name: ProductNameEnum.SuperSaleCoverage, sellIn: -3, price: 40})
        product.UpdatePrice()
        product.ConsoleProduct()
        expect(product.GetProduct().name).equal('Super Sale')
        expect(product.GetProduct().sellIn).equal(-4)
        expect(product.GetProduct().price).equal(39)
    })
})