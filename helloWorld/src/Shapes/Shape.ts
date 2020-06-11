export class Shape {

    constructor(public x: number, public y: number) {
    }

    getInformation(): string {
        return `x = ${this.x} , y = ${this.y}`;
    }
}
