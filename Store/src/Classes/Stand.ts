import { Product } from "./Product";
export class Stand {
    products!: Array<Product>;
    totalPrice(): number {
        return this.products.reduce((sum, current) => sum + current.price * current.quantity, 0);
    }
}