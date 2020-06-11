import {Shape} from './Shape';

export class Circle extends Shape{

    constructor(public x: number, public y: number, public radius: number) {

        super(x, y);
    }

    getInformation(): string {
        return super.getInformation() + `, radius = ${this.radius}`;
    }
}
