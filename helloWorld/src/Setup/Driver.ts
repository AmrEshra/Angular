import {Customer} from './Customer';

class Driver {

    constructor(public firstName: string, public lastName: string) {
    }
}

let driver = new Driver(`Ahmed`, `Osama`);
console.log(driver);

let customer = new Customer(`Tarek`, `Ahmed`);
console.log(customer);
