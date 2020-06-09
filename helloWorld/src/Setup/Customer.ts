class Customer {

    firstName: string;
    lastName: string;

    // constructor(){
    // }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let myCustomer = new Customer(`Amr`, `Ali`);
let myCustomer2 = new Customer(`Ola`, `mora`);
console.log(myCustomer);
console.log(myCustomer2);
