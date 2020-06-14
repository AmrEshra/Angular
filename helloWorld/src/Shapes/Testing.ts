import {Shape} from './Shape';
import {Rectangle} from './Rectangle';
import {Circle} from './Circle';

// let s = new Shape(2, 3); 
let r = new Rectangle(0, 0, 8, 10);
let c = new Circle(5, 5, 100);

let shapes: Shape[] = [];
// shapes.push(s);
shapes.push(r);
shapes.push(c);

for(let s of shapes){
    console.log(s.getInformation());
    console.log(s.calculateArea());
}

