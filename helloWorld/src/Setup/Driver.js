"use strict";
exports.__esModule = true;
var Customer_1 = require("./Customer");
var Driver = /** @class */ (function () {
    function Driver(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Driver;
}());
var driver = new Driver("Ahmed", "Osama");
console.log(driver);
var driver2 = new Driver("Ali", "Eshra");
console.log(driver2.firstName);
var customer = new Customer_1.Customer("Tarek", "Ahmed");
console.log(customer);
