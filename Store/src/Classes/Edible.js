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
var Product_1 = require("./Product");
var Edible = /** @class */ (function (_super) {
    __extends(Edible, _super);
    function Edible(id, name, price, typeOfProduct, quantity, caloriesPer100gr, weight, type, image) {
        var _this = _super.call(this, id, name, price, quantity, typeOfProduct, image) || this;
        _this.caloriesPer100gr = caloriesPer100gr;
        _this.weight = weight;
        _this.type = type;
        return _this;
        /* console.log("Product with name: " + this.name + " and type: " + this.type + " is added."); */
    }
    Edible.prototype.showCalories = function () {
        return this.caloriesPer100gr * this.weight;
    };
    Edible.prototype.calculateCaloriesPer100gr = function () {
        return this.caloriesPer100gr;
    };
    Edible.prototype.showType = function () {
        return this.type;
    };
    return Edible;
}(Product_1.Product));
exports.Edible = Edible;
