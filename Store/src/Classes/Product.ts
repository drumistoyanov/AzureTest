export abstract class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    typeOfProduct:string;
    constructor(id: number, name: string, price: number, quantity: number,typeOfProduct:string, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.typeOfProduct=typeOfProduct;
    }
}