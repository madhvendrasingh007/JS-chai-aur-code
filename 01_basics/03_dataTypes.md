# JavaScript Data Types

A comprehensive guide to understanding JavaScript data types.

## Overview

JavaScript has 8 core data types that can be divided into two categories:

- **Primitive Types**: Values directly stored in memory (String, Number, Boolean, etc.)
- **Reference Type**: Object (including Arrays, Functions, and Dates)

## Data Types in JavaScript

### Primitive Data Types

1. **String**
   - Represents textual data
   - Example: `let name = "JavaScript";`

2. **Number**
   - Represents numeric values (integers and floating points)
   - Example: `let age = 25; let price = 19.99;`

3. **Boolean**
   - Represents logical values
   - Example: `let isActive = true;`

4. **Undefined**
   - Variable declared but not assigned a value
   - Example: `let result;`

5. **Null**
   - Represents intentional absence of any value
   - Example: `let empty = null;`

6. **Symbol** (ES6)
   - Represents unique and immutable values
   - Example: `const uniqueId = Symbol('id');`

7. **BigInt** (ES2020)
   - For representing large integers beyond Number limits
   - Example: `const bigNumber = 9007199254740991n;`

### Reference Data Type

8. **Object**
   - Collection of properties
   - Example: `const person = {firstName: "John", lastName: "Doe"};`

   **Object subtypes:**
   - **Arrays**: `const cars = ["Saab", "Volvo", "BMW"];`
   - **Functions**: `function greet() { return "Hello"; }`
   - **Dates**: `const date = new Date("2022-03-25");`

## Dynamic Typing

JavaScript uses dynamic typing, meaning variables can change types:

```javascript
let x;           // x is undefined
x = 5;           // x is now a Number
x = "Hello";     // x is now a String
```

## Type Checking

You can check the type of a variable using `typeof` operator:

```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (historical bug in JavaScript)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays are objects in JavaScript)
console.log(typeof Symbol());    // "symbol"
console.log(typeof function(){}); // "function"
```

## Important Notes

- `"use strict";` enables strict mode, treating JS code as newer version with stricter error checking
- `alert()` functions work in browsers but not in Node.js environments
- `typeof null` returns "object" which is a historical bug in JavaScript
- Arrays are technically objects in JavaScript

## Code Example

```javascript
"use strict";  // Treat all JS code as newer version

// Variable declarations with different types
let name = "JavaScript";         // String
let version = 2023;              // Number
let isAwesome = true;            // Boolean
let framework;                   // Undefined
let emptyValue = null;           // Null
const uniqueId = Symbol('id');   // Symbol

// Object examples
const user = {                   // Object
    name: "John",
    age: 30
};

const technologies = ["HTML", "CSS", "JS"];  // Array (Object subtype)
const today = new Date();                    // Date (Object subtype)

// Type checking
console.table([
    { "Variable": "name", "Value": name, "Type": typeof name },
    { "Variable": "version", "Value": version, "Type": typeof version },
    { "Variable": "isAwesome", "Value": isAwesome, "Type": typeof isAwesome },
    { "Variable": "framework", "Value": framework, "Type": typeof framework },
    { "Variable": "emptyValue", "Value": emptyValue, "Type": typeof emptyValue },
    { "Variable": "uniqueId", "Value": uniqueId.toString(), "Type": typeof uniqueId },
    { "Variable": "user", "Value": "Object", "Type": typeof user },
    { "Variable": "technologies", "Value": "Array", "Type": typeof technologies }
]);
```

## Summary

JavaScript data types are foundational to understanding how the language works:

- JavaScript has 8 data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol, and Object
- The language uses dynamic typing, allowing variables to change types during execution
- Objects are complex data types that can store collections of data and more complex entities
- The `typeof` operator helps determine a variable's data type, though it has some quirks (like `typeof null` returning "object")
- Understanding the difference between primitive and reference types is crucial for effective JavaScript programming

## Learn More

Here are some valuable resources to deepen your understanding of JavaScript data types:

1. [MDN Web Docs: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
2. [JavaScript.info: Data Types](https://javascript.info/types)
3. [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
4. [The Modern JavaScript Tutorial](https://javascript.info/)
5. [Eloquent JavaScript: Values, Types, and Operators](https://eloquentjavascript.net/01_values.html)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)