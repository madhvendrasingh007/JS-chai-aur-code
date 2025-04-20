# JavaScript Data Types

A comprehensive guide to understanding data types in JavaScript, including primitive and non-primitive types.

## Static vs Dynamic Typing

JavaScript is a **dynamically typed language**, which means variable types are determined at runtime. You don't need to explicitly declare a variable's type before using it, and you can change a variable's type throughout its lifetime.

```javascript
let x = 10;      // x is a number
x = "Hello";     // x is now a string
x = true;        // x is now a boolean
```

This differs from **statically typed languages** like Java, C++, and TypeScript, which require explicit type declarations:

```java
// Java example
int x = 10;            // x can only be an integer
String name = "John";  // name can only be a string
```

**Dynamic typing pros and cons:**
- ✅ More flexibility and faster development
- ✅ Less verbose code
- ❌ Potential runtime errors
- ❌ Type-related bugs may only appear during execution

## Categories of Data Types in JavaScript

JavaScript data types can be categorized into two main groups:

### 1. Primitive Data Types (Call by Value)

Primitive types are immutable and passed by value (a copy is created when assigned to a new variable).

| Type | Description | Example |
|------|-------------|---------|
| **String** | Sequence of characters | `"Hello, world!"`, `'JavaScript'` |
| **Number** | Integer or floating-point | `42`, `3.14`, `NaN`, `Infinity` |
| **Boolean** | Logical value | `true`, `false` |
| **null** | Intentional absence of value | `null` |
| **undefined** | Variable declared but not assigned | `let x;` (value is `undefined`) |
| **Symbol** | Unique and immutable value | `Symbol('id')` |
| **BigInt** | Large integers | `9007199254740991n` |

#### Symbol Example
```javascript
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);  // false (each Symbol is unique)
```

### 2. Non-Primitive Data Types (Call by Reference)

Non-primitive types are mutable and passed by reference (variables point to the same object in memory).

| Type | Description | Example |
|------|-------------|---------|
| **Object** | Collection of key-value pairs | `{ name: "John", age: 30 }` |
| **Array** | Ordered list of values | `[1, 2, 3, 4]` |
| **Function** | Reusable block of code | `function add(x, y) { return x + y; }` |
| **Date** | Date and time representation | `new Date("2023-01-01")` |
| **RegExp** | Regular expression patterns | `/\d+/g` |

#### Examples

```javascript
// Array
const numbers = [1, 2, 3, 4];
console.log(numbers);  // [1, 2, 3, 4]

// Object
const person = {
   name: "Madhvendra Singh",
   age: 21
};
console.log(person);  // { name: 'Madhvendra Singh', age: 21 }

// Function
const add = function(x, y) {
   return x + y;
};
console.log(add(2, 3));  // 5
```

## Type Checking with typeof

The `typeof` operator returns a string indicating the type of the operand:

```javascript
console.log(typeof "Hello");           // "string"
console.log(typeof 42);                // "number"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);         // "undefined"
console.log(typeof Symbol('id'));      // "symbol"
console.log(typeof 10n);               // "bigint"

// Special cases
console.log(typeof null);              // "object" (historical bug in JavaScript)
console.log(typeof []);                // "object" (arrays are objects)
console.log(typeof {});                // "object"
console.log(typeof function() {});     // "function"
```

### Type Checking Results Summary

| Value | typeof Result |
|-------|---------------|
| `"string"` | `"string"` |
| `42` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` ⚠️ |
| `Symbol()` | `"symbol"` |
| `42n` | `"bigint"` |
| `{}` | `"object"` |
| `[]` | `"object"` ⚠️ |
| `function(){}` | `"function"` |

> ⚠️ **Note:** `typeof null` returning `"object"` is a longstanding bug in JavaScript. Also, arrays are considered objects.

## Best Practices

1. **Be mindful of type coercion** - JavaScript will automatically convert types in operations, which can lead to unexpected results.

2. **Check for specific object types** using:
   ```javascript
   Array.isArray([]);         // true
   obj instanceof Date;       // true if obj is a Date
   Object.prototype.toString.call(obj).slice(8, -1);  // Returns type as string
   ```

3. **Consider using TypeScript** for larger projects where type safety is important.

4. **Use strict equality (`===`)** instead of loose equality (`==`) to avoid type coercion during comparisons.

## Learn More

For more information about JavaScript data types:

1. [MDN Web Docs: JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
2. [JavaScript.info: Data types](https://javascript.info/types)
3. [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
4. [TypeScript Documentation](https://www.typescriptlang.org/docs/) - For adding static typing to JavaScript

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)