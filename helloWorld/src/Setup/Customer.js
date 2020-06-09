var Customer = /** @class */ (function () {
    // constructor(){
    // }
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Amr", "Ali");
var myCustomer2 = new Customer("Ola", "mora");
console.log(myCustomer);
console.log(myCustomer2);
