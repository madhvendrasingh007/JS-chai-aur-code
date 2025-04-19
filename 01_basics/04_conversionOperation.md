# JavaScript Type Conversion

A comprehensive guide to JavaScript type conversion operations.

## Overview

JavaScript is a dynamically typed language, which means variables can change types. Type conversion (or type coercion) happens when values are converted from one data type to another, either explicitly or implicitly.

## Type Conversion in JavaScript

### String to Number Conversion

```javascript
// Convert string to number using Number() function
let value = "33";
let valueInNumber = Number(value);
console.log(valueInNumber);  // 33
console.log(typeof valueInNumber);  // number

// Converting invalid string to number results in NaN
let num = "123abc";
let numInNumber = Number(num);
console.log(numInNumber);  // NaN (Not a Number)
console.log(typeof numInNumber);  // number (NaN is still of type number)
```

### Null and Undefined to Number Conversion

```javascript
// Converting null to number
let temp = null;
let tempInNumber = Number(temp);
console.log(tempInNumber);  // 0
console.log(typeof tempInNumber);  // number

// Converting undefined to number
let undef;
let undefInNumber = Number(undef);
console.log(undefInNumber);  // NaN
console.log(typeof undefInNumber);  // number
```

### Boolean to Number Conversion

```javascript
// Converting boolean to number
console.log(Number(true));   // 1
console.log(Number(false));  // 0
```

### To Boolean Conversion

```javascript
// Number to boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true
console.log(typeof booleanIsLoggedIn);  // boolean

console.log(Boolean(0));   // false
console.log(Boolean(1));   // true
console.log(Boolean(""));  // false
console.log(Boolean("Hello"));  // true
```

### To String Conversion

```javascript
// Converting number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);  // "33"
console.log(typeof stringNumber);  // string

// Converting null to string
let someNull = null;
let stringNull = String(someNull);
console.log(stringNull);  // "null"
console.log(typeof stringNull);  // string
```

## Conversion Rules Summary

| Original Value | To Number | To String | To Boolean |
|----------------|-----------|-----------|------------|
| `"33"` | 33 | (stays `"33"`) | `true` |
| `"33abc"` | `NaN` | (stays `"33abc"`) | `true` |
| `true` | 1 | `"true"` | (stays `true`) |
| `false` | 0 | `"false"` | (stays `false`) |
| `null` | 0 | `"null"` | `false` |
| `undefined` | `NaN` | `"undefined"` | `false` |
| `""` (empty string) | 0 | (stays `""`) | `false` |
| `"0"` | 0 | (stays `"0"`) | `true` |
| `0` | (stays `0`) | `"0"` | `false` |
| `1` | (stays `1`) | `"1"` | `true` |

## Important Notes

1. The `Number()` function converts:
   - String numbers to actual numbers
   - Empty strings to 0
   - Non-numeric strings to NaN
   - null to 0
   - undefined to NaN
   - true to 1 and false to 0

2. The `Boolean()` function returns `false` for:
   - 0
   - Empty string (`""`)
   - null
   - undefined
   - NaN
   - false

3. The `String()` function converts any value to its string representation, including "null" and "undefined".

4. NaN is a special value meaning "Not a Number", but its type is still "number".

## Code Example

```javascript
// Different types of variables
let score = 33;             // Number
let value = "33";           // String
let isActive = true;        // Boolean
let empty = null;           // Null
let notDefined;             // Undefined

// Type conversion examples
console.log({
    "Number('33')": Number("33"),              // 33
    "Number('33abc')": Number("33abc"),        // NaN
    "Number(true)": Number(true),              // 1
    "Number(false)": Number(false),            // 0
    "Number(null)": Number(null),              // 0
    "Number(undefined)": Number(undefined),    // NaN
    
    "Boolean(1)": Boolean(1),                  // true
    "Boolean(0)": Boolean(0),                  // false
    "Boolean('')": Boolean(""),                // false
    "Boolean('hello')": Boolean("hello"),      // true
    "Boolean(null)": Boolean(null),            // false
    
    "String(33)": String(33),                  // "33"
    "String(true)": String(true),              // "true"
    "String(null)": String(null),              // "null"
    "String(undefined)": String(undefined)     // "undefined"
});
```

## Common Pitfalls

1. Be careful when comparing values that might be of different types. JavaScript may perform implicit type conversion (coercion) when using operators like `==`.
2. Always use strict equality (`===`) when you want to check both value and type.
3. Remember that `NaN` is not equal to anything, including itself. Use `isNaN()` to test for it.

## Learn More

For more information about JavaScript type conversion:

1. [MDN Web Docs: Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_conversion)
2. [JavaScript.info: Type Conversions](https://javascript.info/type-conversions)
3. [W3Schools: JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
4. [Eloquent JavaScript: Type Coercion](https://eloquentjavascript.net/01_values.html)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)