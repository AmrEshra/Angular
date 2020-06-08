var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Amr", "Ali");
var myCustomer2 = new Customer("Ola", "Magdy");
console.log(myCustomer);
console.log(myCustomer2);
