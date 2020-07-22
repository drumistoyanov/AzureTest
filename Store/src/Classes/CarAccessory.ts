import { NonEdible } from './NonEdible'
import { TypeNonEdible } from '../Enums/TypeNonEdible';
export class CarAccessory extends NonEdible {
    interior: boolean;
    carManufacturer: string;
    constructor(id: number, name: string, price: number, quantity: number,typeOfProduct:string,
        type: TypeNonEdible, interior: boolean, carManufacturer: string, image: string) {
        super(id, name, price, quantity, type,typeOfProduct, image);
        this.type = type;
        this.interior = interior;
        this.carManufacturer = carManufacturer;
        /*  if (this.interior == true) {
             console.log("Car Accessory is for car brand " + this.carManufacturer + " and for intetior.");
         } else {
             console.log("Car Accessory is for car brand " + this.carManufacturer + " and for exterior.");
         } */
    }
}