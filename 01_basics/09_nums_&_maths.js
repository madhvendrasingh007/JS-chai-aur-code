const num1 = 400
// console.log(num1);  // -> 400

const num2 = new Number(100) 
// console.log(num2);  // -> [Number: 100]

// console.log(num1.toString)
// console.log(num2.toFixed(1));   // -> 100.0

const num3 = 128.61827
const num4 = 28.61827
// console.log(num3.toPrecision(3));   // -> 129
// console.log(num4.toPrecision(3));   // -> 28.6

const num5 = 10000000
// console.log(num5.toLocaleString()); // -> 10,000,000
// console.log(num5.toLocaleString('en-IN')); // -> 1,00,00,000

// console.log(Number.MAX_VALUE)   // -> 1.7976931348623157e+308


// *********** MATHS **********************

console.log(Math);  // -> Object [Math] {}
console.log(Math.PI);   // -> 3.141592653589793
console.log(Math.abs(-4))   // -> 4
console.log(Math.round(4.66))   // -> 5
console.log(Math.ceil(4.26))   // -> 5 (if num is greater than .0 then it will take the upper value)
console.log(Math.floor(4.26))   // -> 4 (if num is lesser than .9 then it will take the lower value)

console.log(Math.min(23, 12, 4, 25));   // -> 4
console.log(Math.max(23, 12, 4, 25));   // -> 25

console.log(Math.random());
// gives random number in decimals

console.log((Math.random() * 10) + 1);
// to remove decimal we use this to have decimal shift

console.log(Math.floor(Math.random() * 10) + 1);
// and we take the floor value i.e lower value but it can also be 0 -> to remove this issue we add it with 1 and upper limit can be 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// if the lower limit and upper limit is defined then we use this method