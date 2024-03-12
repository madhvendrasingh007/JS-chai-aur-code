// earlier we've seen cases in which we knew about the number of parameter i.e fixed parameter but now we'll see the case in which we doesn't know the number of parameter to be passed
function calcCartPrice(num1){
    return num1
}
// console.log(calcCartPrice(200, 300, 400))
// expected -> 200 300 400
// actual -> 200

function calcCartPrice2(...num2){   // (...) -> spread operator
    return num2
}
// console.log(calcCartPrice2(200, 300, 400))
// -> [ 200, 300, 400 ] here it is stored in array

function calcCartPrice3(val1, val2, ...num3){  
    return num3
}
// console.log(calcCartPrice3(200, 300, 4000, 5000))
// -> [ 4000, 5000 ]
// in this case val1=200, val2=300, ...num = [4000,5000] so the num is printed


// ****** passing object in function ******
// Object Creation
const user = {
    username: "Madhav",
    prices: 2000
}

// Function declare
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// Calling function
handleObject(user)
// -> Username is Madhav and price is 2000


// passing object directly
handleObject({
    username: "Madhvendra",
    prices: 999
})
// -> Username is Madhvendra and price is 999


// ****** passing array in function ******
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
// -> 400

// passing object directly

console.log(returnSecondValue([299, 399, 999, 99]))
// -> 399