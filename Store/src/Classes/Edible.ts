import { IEdible } from '../Interfaces/IEdible'
import { Product } from './Product'
import { TypeEdible } from '../Enums/TypeEdible'
export abstract class Edible extends Product implements IEdible {
    caloriesPer100gr: number;
    weight: number;
    type: TypeEdible;
    constructor(id: number, name: string, price: number,typeOfProduct:string, quantity: number,
        caloriesPer100gr: number, weight: number, type: TypeEdible, image: string) {
        super(id, name, price, quantity,typeOfProduct, image);
        this.caloriesPer100gr = caloriesPer100gr;
        this.weight = weight;
        this.type = type;
        /* console.log("Product with name: " + this.name + " and type: " + this.type + " is added."); */
    }
    showCalories(): number {
        return this.caloriesPer100gr * this.weight;
    }
    calculateCaloriesPer100gr(): number {
        return this.caloriesPer100gr;
    }
    showType(): TypeEdible {
        return this.type;
    }
}