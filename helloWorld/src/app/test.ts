let name1 = 'Amr';
let name2 = 'Ola';

let grade = 6.9;
let grade2 = 10;

console.log(grade + grade2);
console.log('Hi ' + name1 + ' , ' + name2);
console.log(`Hi ${name1} , Hi ${name2}`);
///////////////////////////////////////////////////////////
for (let i = 0; i < 10; i++) {
	if(i % 2 === 0){
		console.log(i);
	}
}
///////////////////////////////////////////////////////////
let locations = ['Alexandria','Cairo','Dubai','Riyadh'];
locations.push('Jedda');
for (let location of locations) {
	console.log(location);
}
///////////////////////////////////////////////////////////
let numbers = [3,1,2,9,7,5,0,4,5,9];
let sum = 0;
for (let i of numbers) {
	sum += i;
}
console.log(sum);

