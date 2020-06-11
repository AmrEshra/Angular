"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
// let s = new Shape(2, 3);
var r = new Rectangle_1.Rectangle(0, 0, 8, 10);
var c = new Circle_1.Circle(5, 5, 100);
var shapes = [];
// shapes.push(s);
shapes.push(r);
shapes.push(c);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var s = shapes_1[_i];
    console.log(s.getInformation());
    console.log(s.calculateArea());
}
