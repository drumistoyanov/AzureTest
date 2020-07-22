import { Edible } from './Edible';
import { TypeEdible } from '../Enums/TypeEdible';
export class Fruit extends Edible {
    // eslint-disable-next-line 
    constructor(id: number, name: string, price: number,typeOfProduct:string, quantity: number,
        caloriesPer100gr: number, weight: number, type: TypeEdible, image: string) {
        super(id, name, price,typeOfProduct, quantity, caloriesPer100gr, weight, type, image);
    }
}