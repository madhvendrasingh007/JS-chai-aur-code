# JavaScript: Truthy & Falsy, Nullish Coalescing, and Conditional Operators

This section covers important JavaScript fundamentals including truthy/falsy values, nullish coalescing, ternary operator usage, and how to check for empty values in objects/arrays.

---

## ⚖️ Truthy and Falsy Values

In JavaScript, some values are treated as **truthy** or **falsy** in conditional statements.

### ❌ Falsy Values
- `false`
- `0`
- `-0`
- `BigInt(0)`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### ✅ Truthy Values
- `"0"` (string with 0)
- `"false"` (non-empty string)
- `" "` (string with a space)
- `[]` (empty array)
- `{}` (empty object)
- `function() {}` (any function)

---

## 🔎 Checking if a Value Exists

```javascript
const userEmail = "md@xyz";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
```

> Even an empty array `[]` or an empty object `{}` is considered **truthy**, but we can manually check if they're empty.

---

## 📭 Checking for an Empty Array or Object

```javascript
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```

---

## ❓ Nullish Coalescing Operator (`??`)

The `??` operator returns the **right-hand side value** when the left-hand side is `null` or `undefined`.

```javascript
let val1;

val1 = null ?? 10 ?? 20;   // -> 10
console.log(val1);
```

---

## 🧮 Ternary Operator

Syntax:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Example:
```javascript
const iceTeaPrice = 100;
iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80");
```

---

## 📚 Resources to Learn More

1. [MDN – Truthy and Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
2. [MDN – Nullish Coalescing Operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
3. [W3Schools – Ternary Operator](https://www.w3schools.com/js/js_comparisons.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
