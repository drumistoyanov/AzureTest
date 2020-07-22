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
var Edible_1 = require("./Edible");
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    // eslint-disable-next-line 
    function Fruit(id, name, price, typeOfProduct, quantity, caloriesPer100gr, weight, type, image) {
        return _super.call(this, id, name, price, typeOfProduct, quantity, caloriesPer100gr, weight, type, image) || this;
    }
    return Fruit;
}(Edible_1.Edible));
exports.Fruit = Fruit;
