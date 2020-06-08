var name1 = 'Amr';
var name2 = 'Ola';
var grade = 6.9;
var grade2 = 10;
console.log(grade + grade2);
console.log('Hi ' + name1 + ' , ' + name2);
console.log("Hi " + name1 + " , Hi " + name2);
///////////////////////////////////////////////////////////
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
///////////////////////////////////////////////////////////
var locations = ['Alexandria', 'Cairo', 'Dubai', 'Riyadh'];
locations.push('Jedda');
for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
    var location_1 = locations_1[_i];
    console.log(location_1);
}
///////////////////////////////////////////////////////////
var numbers = [3, 1, 2, 9, 7, 5, 0, 4, 5, 9];
var sum = 0;
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var i = numbers_1[_a];
    sum += i;
}
console.log(sum);
