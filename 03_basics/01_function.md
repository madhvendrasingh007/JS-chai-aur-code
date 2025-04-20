# JavaScript Functions Guide

A comprehensive guide to working with functions in JavaScript, covering function basics, parameters, return values, and conditional returns.

## Table of Contents
- [Function Basics](#function-basics)
- [Function Parameters](#function-parameters)
- [Function Return Values](#function-return-values)
- [Function References vs. Execution](#function-references-vs-execution)
- [Conditional Returns](#conditional-returns)
- [Resources for Learning](#resources-for-learning)

## Function Basics

A function is a reusable block of code designed to perform a specific task.

```javascript
function sayMyName() {
    console.log("M")
    console.log("A")
    console.log("D")
    console.log("H")
    console.log("A")
    console.log("V")
}

// Calling the function to execute it
sayMyName();
```

## Function Parameters

Functions can accept inputs called parameters (or arguments when passed during a function call).

```javascript
// Function definition with parameters
function add(num1, num2) {   // num1, num2 are parameters
    console.log(num1 + num2)
}

// Function call with arguments
add(3, 4);    // 3, 4 are arguments -> 7
```

## Function Return Values

Functions can return values using the `return` statement. Without a `return` statement, functions return `undefined` by default.

```javascript
// Function without return - logs output but doesn't return a value
function add(num1, num2) {
    console.log(num1 + num2)
}
const sum = add(4, 5);    // Will log 9 to console
console.log("Result is: " + sum);    // "Result is: undefined"

// Function with return - returns a value
function add2(num4, num5) {
    let sum2 = num4 + num5;
    return sum2;
    // Code after return will not execute
    // console.log("End"); // This line will never run
}
const sum2 = add2(10, 10);
console.log("Result is: " + sum2);   // "Result is: 20"

// Shorter function with direct return
function add3(num6, num7) {
    return num6 + num7;
}
console.log("Result is: " + add3(1, 1));   // "Result is: 2"
```

## Function References vs. Execution

Understanding the difference between referencing a function and executing it:

```javascript
// sayMyName -> reference to the function
// sayMyName() -> executes the function

const functionReference = sayMyName;  // Stores reference without executing
functionReference();  // Now executes the function
```

## Conditional Returns

Functions can use conditional logic to determine what to return:

```javascript
function loginUserMsg(username) {
    if (!username) {  // If username is undefined, null, or empty string
        console.log("Please enter a username")
        return;  // Early return with undefined
    }
    return `${username} just logged in`;
}

console.log(loginUserMsg("Madhvendra"));  // "Madhvendra just logged in"
console.log(loginUserMsg());  // Logs "Please enter a username" then returns undefined
```

## Resources for Learning

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info: Functions](https://javascript.info/function-basics)
- [Eloquent JavaScript: Functions](https://eloquentjavascript.net/03_functions.html)
- [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [You Don't Know JS: Functions](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md)
- [FreeCodeCamp: JavaScript Functions](https://www.freecodecamp.org/news/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e/#functions)
- [JavaScript Functions Explained For Beginners](https://www.w3collective.com/javascript-functions-explained/)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)