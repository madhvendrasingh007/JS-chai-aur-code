// Simple Comparison

// console.log(2 > 1)  //true
// console.log(2 >= 1) //true
// console.log(2 < 1)  //false
// console.log(2 <= 1) //false
// console.log(2 == 1) //false
// console.log(2 != 1) //true

// JS convert string to num
// console.log("2" > 1)    //true
// console.log("02" > 1)   //true


// The reason is that an equal check == and comparison >, <, >=, <= work differently
// Comparison convert null to a number , treating it as 0. That's why null >= 0 is true and null > 0 is false
// Simply while == it will compare null to 0 and while other it will convert null to 0 then compare
console.log(null == 0)  // false
console.log(null > 0)   // false
console.log(null >= 0)  // true
console.log(null < 0)   // false
console.log(null <= 0)  // true

// Undifined
// unlike null -> it will give false 
// console.log(undefined == 0) //false
// console.log(undefined < 0) //false
// console.log(undefined <= 0) //false
// console.log(undefined > 0) //false
// console.log(undefined >= 0) //false

// Strict check -> ===
// compare both value and dataType
console.log("2" == 2)   // true
console.log("2" === 2)  // false