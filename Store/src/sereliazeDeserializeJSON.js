"use strict";
exports.__esModule = true;
var Vegetable_1 = require("./Classes/Vegetable");
var TypeEdible_1 = require("./Enums/TypeEdible");
var Fruit_1 = require("./Classes/Fruit");
var CarAccessory_1 = require("./Classes/CarAccessory");
var TypeNonEdible_1 = require("./Enums/TypeNonEdible");
var WashingProduct_1 = require("./Classes/WashingProduct");
// eslint-disable-next-line 
function AddAllVegetables() {
    var products = [
        new Vegetable_1.Vegetable(1, "Carrot", 1.20, 'Vegetable', 50, 100, 50, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/carrot.jpg"),
        new Vegetable_1.Vegetable(2, "Tomato", 1.5, 'Vegetable', 500, 50, 500, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/tomato.jpg"),
        new Vegetable_1.Vegetable(3, "Cucumber", 1.600, 'Vegetable', 40, 100, 600, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/cucumber.jpg"),
        new Vegetable_1.Vegetable(4, "Garlic", 2.20, 'Vegetable', 505, 10, 505, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/Garlic.jpg"),
        new Vegetable_1.Vegetable(5, "Ginger", 5.20, 'Vegetable', 450, 40, 450, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/ginger.jpeg"),
        new Vegetable_1.Vegetable(6, "Mushrooms", 3.20, 'Vegetable', 50, 100, 50, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/mushroom.jpg"),
        new Vegetable_1.Vegetable(7, "Potatoes", 1.00, 'Vegetable', 450, 200, 450, TypeEdible_1.TypeEdible.Vegetable, true, "../Images/potatoes.jpg")
    ];
    return products;
}
// eslint-disable-next-line 
function AddAllFruits() {
    var products = [
        new Fruit_1.Fruit(8, "Raspberry", 1.20, 'Fruit', 50, 100, 50, TypeEdible_1.TypeEdible.Fruit, "../Images/raspberry.jpg"),
        new Fruit_1.Fruit(9, "Peach", 1.5, 'Fruit', 500, 50, 500, TypeEdible_1.TypeEdible.Fruit, "../Images/peach.jpg"),
        new Fruit_1.Fruit(10, "Banana", 1.600, 'Fruit', 40, 100, 600, TypeEdible_1.TypeEdible.Fruit, "../Images/banana.jpg"),
        new Fruit_1.Fruit(11, "Papaya", 2.20, 'Fruit', 505, 10, 505, TypeEdible_1.TypeEdible.Fruit, "../Images/papaya.jpg"),
        new Fruit_1.Fruit(12, "Strawberry", 5.20, 'Fruit', 450, 40, 450, TypeEdible_1.TypeEdible.Fruit, "../Images/strawberry.jpg"),
        new Fruit_1.Fruit(13, "Mango", 3.20, 'Fruit', 50, 100, 50, TypeEdible_1.TypeEdible.Fruit, "../Images/mango.jpg"),
        new Fruit_1.Fruit(14, "Coconut", 1.00, 'Fruit', 450, 200, 450, TypeEdible_1.TypeEdible.Fruit, "../Images/coconut.jpg")
    ];
    return products;
}
// eslint-disable-next-line 
function AddAllWashingProducts() {
    var products = [
        new WashingProduct_1.WashingProduct(15, "Wash 1000", 4.20, 'WashingProduct', 50, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], true, 'Wash', "../Images/Wash 1000.jpg"),
        new WashingProduct_1.WashingProduct(16, "Bonux 500", 5.5, 'WashingProduct', 20, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], true, 'Bonux', "../Images/Bonux 500.jpg"),
        new WashingProduct_1.WashingProduct(17, "Calgon 500", 3.600, 'WashingProduct', 20, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], true, 'Calgon', "../Images/Calgon 500.jpg"),
        new WashingProduct_1.WashingProduct(18, "Clorox 2", 6.20, 'WashingProduct', 20, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], true, 'Clorox', "../Images/Clorox 2.jpg"),
        new WashingProduct_1.WashingProduct(19, "Ecover", 7.20, 'WashingProduct', 30, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], false, 'Ecover', "../Images/Ecover.jpg"),
        new WashingProduct_1.WashingProduct(20, "Fairy", 9.20, 'WashingProduct', 25, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], false, 'Fairy', "../Images/Fairy.jpg"),
        new WashingProduct_1.WashingProduct(21, "Vanish 10", 3.00, 'WashingProduct', 15, TypeNonEdible_1.TypeNonEdible["Cleaning Liquids"], false, 'Vanish', "../Images/Vanish 10.jpg")
    ];
    return products;
}
// eslint-disable-next-line 
function AddAllCarAccessories() {
    var products = [
        new CarAccessory_1.CarAccessory(22, "Car Cover", 11.20, 50, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], true, 'Carx', "../Images/Car Cover.jpg"),
        new CarAccessory_1.CarAccessory(23, "Comprehensive Tool Kit", 15.5, 500, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], true, 'Plus', "../Images/Comprehensive Tool Kit.jpg"),
        new CarAccessory_1.CarAccessory(24, "Air Freshener", 13.600, 40, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], true, 'Cont', "../Images/Air Freshener.jpg"),
        new CarAccessory_1.CarAccessory(25, "First Aid Kit", 24.20, 505, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], true, 'Fix', "../Images/First Aid Kit.jpg"),
        new CarAccessory_1.CarAccessory(26, "Fire Extinguisher", 52.20, 450, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], false, 'Work', "../Images/Fire Extinguisher.jpg"),
        new CarAccessory_1.CarAccessory(27, "Puncture Repair Kit", 33.20, 50, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], false, 'Painters', "../Images/Puncture Repair Kit.jpg"),
        new CarAccessory_1.CarAccessory(28, "Tire Inflator and Pressure Gauge", 100.00, 450, 'CarAccessory', TypeNonEdible_1.TypeNonEdible["Car Accessories"], false, '', "../Images/Tire Inflator and Pressure Gauge.jpg")
    ];
    return products;
}
var washingProducts = AddAllWashingProducts();
var carProducts = AddAllCarAccessories();
var vegetables = AddAllVegetables();
var fruits = AddAllFruits();
var products = new Array();
var edibleProducts = new Array();
var nonEdibleProducts = new Array();
edibleProducts = edibleProducts.concat(vegetables, fruits);
nonEdibleProducts = nonEdibleProducts.concat(carProducts, washingProducts);
products = products.concat(edibleProducts, nonEdibleProducts);
serializeJSON();
function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function (dataUrl) {
    console.log('RESULT:', dataUrl);
});
function serializeJSON() {
    var json = JSON.stringify(products, null, 4);
    var fs = require('fs');
    fs.writeFile('products.json', json, function (err, result) {
        if (err)
            console.log('error', err);
        else
            console.log('done');
    });
}
exports.serializeJSON = serializeJSON;
function deserializeJSON() {
    var data = require('./products.json');
    return JSON.parse(JSON.stringify(data));
}
exports.deserializeJSON = deserializeJSON;
