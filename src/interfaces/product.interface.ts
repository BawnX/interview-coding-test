export enum ProductNameEnum {
    LowCoverage = 'Low Coverage',
    MediumCoverage = 'Medium Coverage',
    FullCoverage = 'Full Coverage',
    SpecialFullCoverage = 'Special Full Coverage',
    MegaCoverage = 'Mega Coverage',
    SuperSaleCoverage = 'Super Sale'
}

export interface ProductInterface{
    name: ProductNameEnum;
    sellIn: number;
    price: number;
}
