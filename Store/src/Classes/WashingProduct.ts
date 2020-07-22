import { NonEdible } from './NonEdible'
import { TypeNonEdible } from '../Enums/TypeNonEdible';
export class WashingProduct extends NonEdible {
    forHome: boolean;
    brand: string;
    constructor(id: number, name: string, price: number,typeOfProduct:string, quantity: number,
        type: TypeNonEdible, forHome: boolean, brand: string, image: string) {
        super(id, name, price, quantity, type,typeOfProduct, image);
        this.type = type;
        this.forHome = forHome;
        this.brand = brand;
        /*  if (this.forHome == true) {
             console.log("Washing Product with brand " + this.brand + " is for home.");
         } else {
             console.log("Washing Product with brand " + this.brand + " is for outside.");
         } */
    }
}