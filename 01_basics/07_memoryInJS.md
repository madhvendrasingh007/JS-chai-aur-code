# JavaScript Data Types and Memory Management

This repository explains JavaScript's data types, memory allocation patterns, and the important differences between primitive and reference types.

## Overview

JavaScript is a **dynamically typed language**, meaning you don't need to specify data types when declaring variables. However, understanding how different data types are stored and passed is crucial for writing efficient code.

## Data Types in JavaScript

JavaScript has two main categories of data types:

### 1. Primitive Data Types
- Stored in **stack memory**
- Passed by **value** (call by value)
- Changes to copies don't affect the original variable
- Types:
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `BigInt`
  - `symbol`

### 2. Reference/Non-Primitive Data Types
- Values stored in **heap memory**, with references stored in stack
- Passed by **reference** (call by reference)
- Changes through one reference affect the original value
- Types:
  - `object`
  - `array` (technically objects)
  - `function`

## Memory Allocation Visualization

```
Stack Memory                   Heap Memory
-------------                  -----------
| user2 | -------|            |           |
|-------|       |------------>|  {name,   |
| user1 | -------|            |   id}     |
|-------|                     |           |
| name1 |                     |           |
|-------|                     |           |
| name2 |                     |           |
-------------                  -----------
```

## Practical Examples

### Primitive Types Example

```javascript
let name1 = "maddy";
let name2 = name1;  // Copy of value

name2 = "Madhvendra";  // Modifying the copy

console.log(name1);  // "maddy" (original unchanged)
console.log(name2);  // "Madhvendra"
```

### Reference Types Example

```javascript
let user1 = {
    name: "Ram",
    id: 1
};

let user2 = user1;  // Reference to the same object

user2.name = "Ramesh";  // Modifying through reference

console.log(user1.name);  // "Ramesh" (original changed)
console.log(user2.name);  // "Ramesh"
```

## Key Differences

| Primitive Types | Reference Types |
|-----------------|-----------------|
| Immutable       | Mutable         |
| Fixed size      | Dynamic size    |
| Stack memory    | Heap memory     |
| Direct value access | Access via reference |
| Fast access     | Slower access   |

## Why This Matters

Understanding how JavaScript manages memory:
- Helps predict code behavior
- Avoids unexpected side effects
- Improves application performance
- Essential for proper object manipulation

## Common Pitfalls

- Unintentional object mutation
- Shallow vs deep copying
- Comparison operators behaving differently (`==` vs `===`)
- Memory leaks with circular references

## Best Practices

- Use immutable patterns when appropriate
- Create proper copies of objects when needed
- Be explicit about your intentions with variable assignments
- Understand the implications of passing objects to functions

## Learn More

1. [MDN Web Docs: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
2. [JavaScript.info: Data Types](https://javascript.info/types)
3. [W3Schools: JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
4. [MDN Web Docs: Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
5. [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Further Learning

- Garbage collection in JavaScript  
- Memory optimization techniques
- Immutable data structures
- Performance implications of different data types

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)