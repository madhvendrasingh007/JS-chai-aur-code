# JavaScript Variables Guide

A concise guide to variable declarations in JavaScript with practical examples and best practices.

## Variable Declaration Example

```javascript
const accountId = 12345            // Cannot be reassigned
let accountEmail = "smad@gmail.com"  // Block-scoped, reassignable
var accountPwd = "1234"            // Function-scoped (avoid in modern code)
accountCity = "Jaipur"             // Implicit global variable (not recommended)
let accountState;                  // Declared but undefined

// Reassignment examples
// accountId = 2    ❌ Not Allowed - const cannot be changed
accountEmail = "xyz@gmail.com"     // ✅ Works - let can be reassigned
accountPwd = "12121"               // ✅ Works - var can be reassigned  
accountCity = "Bengaluru"          // ✅ Works - implicit variables can be changed

// Output
console.log(accountId);            // 12345
console.table([accountEmail, accountPwd, accountCity, accountState]);
```

## Declaration Methods

| Method | Introduced | Scope | Reassignable | Redeclarable | Hoisting | Use Case |
|--------|------------|-------|--------------|--------------|----------|----------|
| `const` | ES6 (2015) | Block | ❌ No | ❌ No | Yes (TDZ) | Default choice for values that shouldn't change |
| `let` | ES6 (2015) | Block | ✅ Yes | ❌ No | Yes (TDZ) | For values that need reassignment |
| `var` | Pre-ES6 | Function | ✅ Yes | ✅ Yes | Yes (undefined) | Legacy code only |
| Implicit | Always | Global | ✅ Yes | N/A | No | Avoid - causes unintended globals |

> **TDZ**: Temporal Dead Zone - variables exist but cannot be accessed before declaration

## Key Differences: var vs let

### 1. Scope
```javascript
if (true) {
  var x = 10;  // Accessible outside block
  let y = 20;  // Limited to this block
}
console.log(x);  // 10 - var is function-scoped
console.log(y);  // ReferenceError - let is block-scoped
```

### 2. Hoisting
```javascript
console.log(a);  // undefined - hoisted with value undefined
var a = 5;

console.log(b);  // ReferenceError - in "temporal dead zone"
let b = 10;
```

### 3. Redeclaration
```javascript
var z = 30;
var z = 40;  // Works fine

let w = 50;
let w = 60;  // SyntaxError: Identifier 'w' has already been declared
```

## Best Practices

1. **Use `const` by default** - Makes code more predictable
2. **Use `let` when values need to change** - Provides appropriate scoping
3. **Avoid `var` in modern code** - Prevents scope confusion
4. **Never use implicit declarations** - Prevents global namespace pollution
5. **Declare all variables at the top of their scope** - Improves readability
6. **Use descriptive variable names** - Enhances code understanding

## Object & Array Constants

When using `const` with objects and arrays, the reference is constant but properties and elements can be modified:

```javascript
const user = { name: "Madhvendra", city: "Bengaluru" };
user.name = "Madhvendra Singh";  // ✅ Works - modifying properties is allowed
user = {};  // ❌ Error - reassigning the reference is not allowed

const skills = ["JavaScript", "HTML"];
skills.push("CSS");  // ✅ Works - modifying array content is allowed
skills = [];  // ❌ Error - reassigning the reference is not allowed
```

## Modern JavaScript Recommendation

- **For new code**: Use `const` and `let` exclusively
- **For values that shouldn't change**: Use `const`
- **For values that need reassignment**: Use `let`
- **For better type safety**: Consider TypeScript

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)