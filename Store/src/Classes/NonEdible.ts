import { INonEdible } from '../Interfaces/INonEdible'
import { Product } from './Product'
import { TypeNonEdible } from '../Enums/TypeNonEdible'
export abstract class NonEdible extends Product implements INonEdible {
    type: TypeNonEdible;
    constructor(id: number, name: string, price: number, quantity: number,
        type: TypeNonEdible,typeOfProduct:string, image: string) {
        super(id, name, price, quantity,typeOfProduct, image);
        this.type = type;
        /* console.log("Product with name: " + this.name + " and type: " + this.type + " is added."); */
    }
    showType(): TypeNonEdible {
        return this.type;
    }
}