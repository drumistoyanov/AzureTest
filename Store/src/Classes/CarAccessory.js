"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NonEdible_1 = require("./NonEdible");
var CarAccessory = /** @class */ (function (_super) {
    __extends(CarAccessory, _super);
    function CarAccessory(id, name, price, quantity, typeOfProduct, type, interior, carManufacturer, image) {
        var _this = _super.call(this, id, name, price, quantity, type, typeOfProduct, image) || this;
        _this.type = type;
        _this.interior = interior;
        _this.carManufacturer = carManufacturer;
        return _this;
        /*  if (this.interior == true) {
             console.log("Car Accessory is for car brand " + this.carManufacturer + " and for intetior.");
         } else {
             console.log("Car Accessory is for car brand " + this.carManufacturer + " and for exterior.");
         } */
    }
    return CarAccessory;
}(NonEdible_1.NonEdible));
exports.CarAccessory = CarAccessory;
