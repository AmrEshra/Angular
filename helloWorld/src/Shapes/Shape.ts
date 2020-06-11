
/* abstract class can't be instantiated */
export abstract class Shape {

    constructor(public x: number, public y: number) {
    }

    getInformation(): string {
        return `x = ${this.x} , y = ${this.y}`;
    }

    /* abstract methods must be implemented by subclasses */
    abstract calculateArea(): number;
}
