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
var Vegetable = /** @class */ (function (_super) {
    __extends(Vegetable, _super);
    function Vegetable(id, name, price, typeOfProduct, quantity, caloriesPer100gr, weight, type, canBeEatenRaw, image) {
        var _this = _super.call(this, id, name, price, typeOfProduct, quantity, caloriesPer100gr, weight, type, image) || this;
        _this.canBeEatenRaw = canBeEatenRaw;
        return _this;
        /* if (this.canBeEatenRaw == true) {
            console.log("This vegetable can be eaten raw");
        } else {
            console.log("This vegetable can't be eaten raw");
        } */
    }
    return Vegetable;
}(Edible_1.Edible));
exports.Vegetable = Vegetable;
