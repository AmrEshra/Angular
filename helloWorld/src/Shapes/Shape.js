"use strict";
exports.__esModule = true;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Shape.prototype.getInformation = function () {
        return "x = " + this.x + " , y = " + this.y;
    };
    return Shape;
}());
exports.Shape = Shape;
