import { Edible } from './Edible';
import { TypeEdible } from '../Enums/TypeEdible';
export class Vegetable extends Edible {
    canBeEatenRaw: boolean;
    constructor(id: number, name: string, price: number,typeOfProduct:string, quantity: number,
        caloriesPer100gr: number, weight: number, type: TypeEdible, canBeEatenRaw: boolean, image: string) {
        super(id, name, price,typeOfProduct, quantity, caloriesPer100gr, weight, type, image);
        this.canBeEatenRaw = canBeEatenRaw;
        /* if (this.canBeEatenRaw == true) {
            console.log("This vegetable can be eaten raw");
        } else {
            console.log("This vegetable can't be eaten raw");
        } */
    }
}