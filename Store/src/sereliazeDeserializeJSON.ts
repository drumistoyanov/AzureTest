import { Vegetable } from "./Classes/Vegetable";
import { TypeEdible } from "./Enums/TypeEdible";
import { Fruit } from "./Classes/Fruit";
import { CarAccessory } from "./Classes/CarAccessory";
import { TypeNonEdible } from "./Enums/TypeNonEdible";
import { WashingProduct } from "./Classes/WashingProduct";
import { Product } from "./Classes/Product";
// eslint-disable-next-line 
import { callbackify } from "util";
// eslint-disable-next-line 
import { Edible } from "./Classes/Edible";
// eslint-disable-next-line 
import { NonEdible } from "./Classes/NonEdible";
// eslint-disable-next-line 
function AddAllVegetables(): Vegetable[] {
    let products = [
        new Vegetable(1, "Carrot", 1.20,'Vegetable', 50, 100, 50, TypeEdible.Vegetable, true,"../Images/carrot.jpg"),
        new Vegetable(2, "Tomato", 1.5,'Vegetable', 500, 50, 500, TypeEdible.Vegetable, true,"../Images/tomato.jpg"),
        new Vegetable(3, "Cucumber", 1.600,'Vegetable', 40, 100, 600, TypeEdible.Vegetable, true,"../Images/cucumber.jpg"),
        new Vegetable(4, "Garlic", 2.20,'Vegetable', 505, 10, 505, TypeEdible.Vegetable, true,"../Images/Garlic.jpg"),
        new Vegetable(5, "Ginger", 5.20,'Vegetable', 450, 40, 450, TypeEdible.Vegetable, true,"../Images/ginger.jpeg"),
        new Vegetable(6, "Mushrooms", 3.20,'Vegetable', 50, 100, 50, TypeEdible.Vegetable, true,"../Images/mushroom.jpg"),
        new Vegetable(7, "Potatoes", 1.00,'Vegetable', 450, 200, 450, TypeEdible.Vegetable, true,"../Images/potatoes.jpg")
    ]
    return products;
}
// eslint-disable-next-line 
function AddAllFruits(): Fruit[] {
    let products = [
        new Fruit(8, "Raspberry", 1.20,'Fruit', 50, 100, 50, TypeEdible.Fruit,"../Images/raspberry.jpg"),
        new Fruit(9, "Peach", 1.5,'Fruit', 500, 50, 500, TypeEdible.Fruit,"../Images/peach.jpg"),
        new Fruit(10, "Banana", 1.600,'Fruit', 40, 100, 600, TypeEdible.Fruit,"../Images/banana.jpg"),
        new Fruit(11, "Papaya", 2.20,'Fruit', 505, 10, 505, TypeEdible.Fruit,"../Images/papaya.jpg"),
        new Fruit(12, "Strawberry", 5.20,'Fruit', 450, 40, 450, TypeEdible.Fruit,"../Images/strawberry.jpg"),
        new Fruit(13, "Mango", 3.20,'Fruit', 50, 100, 50, TypeEdible.Fruit,"../Images/mango.jpg"),
        new Fruit(14, "Coconut", 1.00,'Fruit', 450, 200, 450, TypeEdible.Fruit,"../Images/coconut.jpg")
    ]
    return products;
}
// eslint-disable-next-line 
function AddAllWashingProducts(): WashingProduct[] {
    let products = [
        new WashingProduct(15, "Wash 1000", 4.20,'WashingProduct', 50,TypeNonEdible["Cleaning Liquids"], true, 'Wash',"../Images/Wash 1000.jpg"),
        new WashingProduct(16, "Bonux 500", 5.5, 'WashingProduct',20, TypeNonEdible["Cleaning Liquids"], true, 'Bonux',"../Images/Bonux 500.jpg"),
        new WashingProduct(17, "Calgon 500", 3.600, 'WashingProduct',20, TypeNonEdible["Cleaning Liquids"], true, 'Calgon',"../Images/Calgon 500.jpg"),
        new WashingProduct(18, "Clorox 2", 6.20, 'WashingProduct',20, TypeNonEdible["Cleaning Liquids"], true, 'Clorox',"../Images/Clorox 2.jpg"),
        new WashingProduct(19, "Ecover", 7.20, 'WashingProduct',30, TypeNonEdible["Cleaning Liquids"], false, 'Ecover',"../Images/Ecover.jpg"),
        new WashingProduct(20, "Fairy", 9.20,'WashingProduct', 25, TypeNonEdible["Cleaning Liquids"], false, 'Fairy',"../Images/Fairy.jpg"),
        new WashingProduct(21, "Vanish 10", 3.00, 'WashingProduct',15, TypeNonEdible["Cleaning Liquids"], false, 'Vanish',"../Images/Vanish 10.jpg")
    ]
    return products;
}
// eslint-disable-next-line 
function AddAllCarAccessories(): CarAccessory[] {
    let products = [
        new CarAccessory(22, "Car Cover", 11.20, 50,'CarAccessory', TypeNonEdible["Car Accessories"], true, 'Carx',"../Images/Car Cover.jpg"),
        new CarAccessory(23, "Comprehensive Tool Kit", 15.5, 500,'CarAccessory', TypeNonEdible["Car Accessories"], true, 'Plus',"../Images/Comprehensive Tool Kit.jpg"),
        new CarAccessory(24, "Air Freshener", 13.600, 40,'CarAccessory', TypeNonEdible["Car Accessories"], true, 'Cont',"../Images/Air Freshener.jpg"),
        new CarAccessory(25, "First Aid Kit", 24.20, 505,'CarAccessory', TypeNonEdible["Car Accessories"], true, 'Fix',"../Images/First Aid Kit.jpg"),
        new CarAccessory(26, "Fire Extinguisher", 52.20, 450,'CarAccessory', TypeNonEdible["Car Accessories"], false, 'Work',"../Images/Fire Extinguisher.jpg"),
        new CarAccessory(27, "Puncture Repair Kit", 33.20, 50, 'CarAccessory',TypeNonEdible["Car Accessories"], false, 'Painters',"../Images/Puncture Repair Kit.jpg"),
        new CarAccessory(28, "Tire Inflator and Pressure Gauge", 100.00, 450, 'CarAccessory',TypeNonEdible["Car Accessories"], false, '',"../Images/Tire Inflator and Pressure Gauge.jpg")
    ]
    return products;
}


// let washingProducts = AddAllWashingProducts();
// let carProducts = AddAllCarAccessories();
// let vegetables = AddAllVegetables();
// let fruits = AddAllFruits();
// let products = new Array<Product>();
// let edibleProducts = new Array<Edible>();
// let nonEdibleProducts = new Array<NonEdible>();
// edibleProducts = edibleProducts.concat(vegetables, fruits);
// nonEdibleProducts = nonEdibleProducts.concat(carProducts, washingProducts);
// products = products.concat(edibleProducts, nonEdibleProducts);
// serializeJSON();

// export function serializeJSON() {
//     let json = JSON.stringify(products, null, 4);
//     let fs = require('fs');
//     fs.writeFile('products.json', json, function (err:any, result:any) {
//         if (err) console.log('error', err)
//         else console.log('done');
//     });
// } 
export function deserializeJSON():Array<Product> {
    var data = require('./products.json');
    return JSON.parse(JSON.stringify(data))
}



