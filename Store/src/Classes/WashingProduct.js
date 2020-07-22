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
var WashingProduct = /** @class */ (function (_super) {
    __extends(WashingProduct, _super);
    function WashingProduct(id, name, price, typeOfProduct, quantity, type, forHome, brand, image) {
        var _this = _super.call(this, id, name, price, quantity, type, typeOfProduct, image) || this;
        _this.type = type;
        _this.forHome = forHome;
        _this.brand = brand;
        return _this;
        /*  if (this.forHome == true) {
             console.log("Washing Product with brand " + this.brand + " is for home.");
         } else {
             console.log("Washing Product with brand " + this.brand + " is for outside.");
         } */
    }
    return WashingProduct;
}(NonEdible_1.NonEdible));
exports.WashingProduct = WashingProduct;
