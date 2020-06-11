import {Shape} from './Shape';

export class Rectangle extends Shape{

    constructor(public x: number, public y: number, public width: number, public length: number) {

        super(x, y);
    }

    getInformation(): string {
        return super.getInformation() + `, width = ${this.width} , length = ${this.length}`;
    }

    calculateArea(): number {
        return this.width * this.length;
    }
}
