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
var NonEdible = /** @class */ (function (_super) {
    __extends(NonEdible, _super);
    function NonEdible(id, name, price, quantity, type, typeOfProduct, image) {
        var _this = _super.call(this, id, name, price, quantity, typeOfProduct, image) || this;
        _this.type = type;
        return _this;
        /* console.log("Product with name: " + this.name + " and type: " + this.type + " is added."); */
    }
    NonEdible.prototype.showType = function () {
        return this.type;
    };
    return NonEdible;
}(Product_1.Product));
exports.NonEdible = NonEdible;
