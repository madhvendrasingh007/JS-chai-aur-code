/*  ************* OPERATION *************   */

let value = 3
let negValue = -value
console.log(negValue)   // -3

// Basic operation
// console.log (2+2)    // 4
// console.log (2-2)    // 0
// console.log (2*2)    // 4
// console.log (2%2)    // 0 
// console.log (2/2)    // 1
// console.log (2**3)   // 2 power 3 = 8

let str1 = "Madhvendra"
let str2 = " Singh"
console.log(str1+str2)  // Madhvendra Singh



/*  ************* Important *************   */

console.log("3" + "3")  // string + string = string = 33
console.log("1" + 2);   // => string + string =12
console.log(1 + "2");   // => num + string = 12

// string + num + num = string + string + string
console.log("1" + 2 + 2)    // => 122

// num + num + string => (num+num) + string
console.log(1 + 2 + "2")    // => 32

console.log(1 - "2")    // => num - num = -1
console.log("1" - 2)    // => num - num = -1

console.log("5" * "2")  // => num * num = 10

// num + num + string => (num+num) + num => num
console.log(3 + + "3")

// string + string => nunmber (only when - is encounter)
// string + string => num - string => num - num => num
console.log("3" + "3" - "3")    // 30





// 5 + null    returns 5         because null is converted to 0
// "5" + null  returns "5null"   because null is converted to "null"
// "5" + 2     returns "52"      because 2 is converted to "2"
// "5" - 2     returns 3         because "5" is converted to 5
// "5" * "2"   returns 10        because "5" and "2" are converted to 5

console.log(5 + null);  // 5
console.log("5" + null);    // 5null