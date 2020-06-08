class Customer {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let myCustomer = new Customer(`Amr`, `Ali`);
let myCustomer2 = new Customer(`Ola`, `Magdy`);
console.log(myCustomer);
console.log(myCustomer2);
