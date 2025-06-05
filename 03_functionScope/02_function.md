# JavaScript Advanced Function Parameters

A guide to handling variable parameters, rest parameters, and passing objects and arrays to functions in JavaScript.

## Table of Contents
- [Rest Parameters](#rest-parameters)
- [Handling Objects as Parameters](#handling-objects-as-parameters)
- [Working with Arrays as Parameters](#working-with-arrays-as-parameters)
- [Practical Examples](#practical-examples)
- [Resources for Learning](#resources-for-learning)

## Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array, providing flexibility when the number of parameters is unknown.

### Basic Usage of Rest Parameters

```javascript
// Traditional function with fixed parameters
function calcCartPrice(num1) {
    return num1;
}
console.log(calcCartPrice(200, 300, 400));
// Output: 200 (only the first argument is used)

// Using rest parameters to capture all arguments
function calcCartPrice2(...num2) {
    return num2;
}
console.log(calcCartPrice2(200, 300, 400));
// Output: [200, 300, 400] (all arguments collected in an array)
```

### Combining Regular Parameters with Rest Parameters

```javascript
// First parameters are assigned normally, rest are collected in an array
function calcCartPrice3(val1, val2, ...num3) {
    return num3;
}
console.log(calcCartPrice3(200, 300, 4000, 5000));
// Output: [4000, 5000] (val1=200, val2=300, num3=[4000, 5000])
```

## Handling Objects as Parameters

Objects can be passed to functions to handle complex data structures efficiently.

### Passing Objects to Functions

```javascript
// Object Creation
const user = {
    username: "Madhav",
    prices: 2000
};

// Function that accepts an object parameter
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// Calling function with object variable
handleObject(user);
// Output: Username is Madhav and price is 2000

// Passing object directly
handleObject({
    username: "Madhvendra",
    prices: 999
});
// Output: Username is Madhvendra and price is 999
```

### Object Destructuring in Parameters

```javascript
// Using object destructuring in function parameters
function handleObjectDestructured({ username, prices }) {
    console.log(`Username is ${username} and price is ${prices}`);
}

handleObjectDestructured(user);
// Output: Username is Madhav and price is 2000
```

## Working with Arrays as Parameters

Arrays can be passed to functions and manipulated or accessed as needed.

### Accessing Array Elements

```javascript
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// Output: 400

// Passing array directly
console.log(returnSecondValue([299, 399, 999, 99]));
// Output: 399
```

### Array Destructuring in Parameters

```javascript
// Using array destructuring in function parameters
function processValues([first, second, ...rest]) {
    console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);
}

processValues(myNewArray);
// Output: First: 200, Second: 400, Rest: 100,600
```

## Practical Examples

### Shopping Cart Total with Rest Parameters

```javascript
function calculateTotal(...prices) {
    return prices.reduce((total, current) => total + current, 0);
}

console.log(calculateTotal(100, 200, 300, 50));
// Output: 650
```

### User Profile Handling

```javascript
function createUserProfile(id, { name, age, email = "not provided" } = {}) {
    return {
        id,
        name,
        age,
        email,
        createdAt: new Date()
    };
}

const profile = createUserProfile(123, { name: "Madhav", age: 25 });
console.log(profile);
// Output: { id: 123, name: "Madhav", age: 25, email: "not provided", createdAt: [Date object] }
```

## Resources for Learning

- [MDN Web Docs: Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN Web Docs: Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript.info: Rest Parameters and Spread Syntax](https://javascript.info/rest-parameters-spread)
- [W3Schools: JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)
- [FreeCodeCamp: JavaScript Rest Parameters Tutorial](https://www.freecodecamp.org/news/javascript-rest-parameters-and-spread-syntax/)
- [Eloquent JavaScript: Functions Chapter](https://eloquentjavascript.net/03_functions.html)
- [Modern JavaScript Tutorial: Advanced Working with Functions](https://javascript.info/advanced-functions)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)