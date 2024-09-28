// An array is a special variable, which can hold more than one value:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// for shallow copies refer : https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy


const myArr = [0, 21, 12, 53, 4]
console.log(myArr[3]);  //  53

// const myHeros = ["Iron Man", "BatMan", "Thor"]
// console.log(myHeros);   //  [ 'Iron Man', 'BatMan', 'Thor' ]

// Another way to print Array
const myArr2 = new Array(12, 33, 1, 43)

// Array methods

// // Add number to end
// myArr2.push(19)
// myArr2.push(7)
// console.log(myArr2)  //  [12, 33, 1, 43, 19,  7]

// Remove number from end
// myArr2.pop()
// console.log(myArr2)  //  [12, 33, 1, 43, 19]

// Add number to start
myArr.unshift(9)
console.log(myArr); //  [ 9, 0, 21, 12, 53, 4 ]

// Remove number from start
myArr.shift()
console.log(myArr); //  [ 0, 21, 12, 53, 4 ]

console.log(myArr.includes(99));    //  false
console.log(myArr.indexOf(99));    //  -1
console.log(myArr.indexOf(12));    //  2

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)  // String

// ******* slice / splice *******
// Refer for slice and splice : https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

console.log("A ", myArr);

// SLICE
const myN1 = myArr.slice(1,3)
console.log(myN1);

console.log("B ", myArr);

// SPLICE -> it manipulates the original array & last value is included
const myN2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myN2);

console.log(`Original Array :-> ${myArr}`)
