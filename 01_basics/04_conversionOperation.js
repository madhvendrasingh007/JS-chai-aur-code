console.log("Printing number and its type:")
let score = 33
// score is in number
console.log(score)
console.log(typeof score)

console.log("Printing string and its type:")
let value = "33"
// value is in string
console.log(value)
console.log(typeof value)



/* *************** Conversion to number *************** */
console.log("conversion of string to number:")
let valueInNumber = Number(value)
console.log(valueInNumber)
console.log(typeof valueInNumber)

// let the variable be consist of number and character 
// then it will show NaN -> Not a number
console.log("conversion of string & char to number:")
let num = "123abc"
let numInNumber = Number(num)
console.log(numInNumber)
console.log(typeof numInNumber)

// lets check for the null value converted in the number 
console.log("conversion of null to number:")
let temp = null
let tempInNumber = Number(temp)
console.log(tempInNumber)
console.log(typeof tempInNumber)

// "33"    =========> 33
// "33abc" =========> NaN
// true    =========> 1
// false   =========> 0
// null    =========> 0
// undefined =======> NaN




/* *************** Conversion to boolean *************** */
// lets check for the number value converted in the boolean 
console.log("conversion of number to boolean:")
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// 1    ===========> true
// 0    ===========> false
// ""   ===========> false
// any string =====> true




/* *************** Conversion to string *************** */
console.log("conversion of number to string:")
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


console.log("conversion of Null to string:")
let someNull = null
let stringNull = String(someNull)
console.log(stringNull)
console.log(typeof stringNull)
