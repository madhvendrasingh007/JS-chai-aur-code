# JavaScript Scope Explained

This README explains **JavaScript Scope**, including `block scope`, `function scope`, and common pitfalls with `var`, `let`, and `const`. Understanding scope is crucial to writing secure, predictable JavaScript code.

---

## What is Scope?

**Scope** determines the accessibility (visibility) of variables in different parts of your code.

- `{}` defines a **block**, which can act as a scope when used with control structures (`if`, `for`, etc.) or functions.
- JavaScript has:
  - **Global Scope**
  - **Block Scope**
  - **Function Scope**

---

## Global vs Block Scope

### Example 1: `var` vs `let`/`const`

```javascript
// Global Scope
var c = 200;

if (true) {
    // Block Scope
    let a = 20;
    const b = 30;
    var c = 40;
}

// console.log(a); // ❌ ReferenceError: a is not defined
// console.log(b); // ❌ ReferenceError: b is not defined
console.log(c);    // ✅ 40 - var is function/global scoped, not block scoped
```

### Explanation

- `let` and `const` are block-scoped: they are only accessible within the `{}` where they were declared.
- `var` is **not block scoped**, which can lead to **unexpected overwriting** of variables outside the block.

---

### Example 2: Shadowing with `let`

```javascript
// Global Scope
let d = 300;

if (true) {
    // Block Scope
    let d = 20;
    console.log("Inner: " + d);  // Output: Inner: 20
}

console.log(d);  // Output: 300
```

### Explanation

- The inner `let d = 20;` creates a new variable that **shadows** the outer one.
- Both exist independently within their respective scopes.

---

## Key Concepts

| Keyword  | Scope Type     | Redeclaration | Reassignment | Hoisting | Best Use                        |
|----------|----------------|---------------|--------------|----------|---------------------------------|
| `var`    | Function/Global| ✅ Yes         | ✅ Yes        | ✅ Yes    | Avoid in modern code            |
| `let`    | Block          | ❌ No          | ✅ Yes        | ✅ TDZ    | Use for mutable block variables |
| `const`  | Block          | ❌ No          | ❌ No         | ✅ TDZ    | Use for constants               |

> **TDZ** = Temporal Dead Zone: Variable exists but can't be accessed before declaration

---

## Common Pitfalls

- Using `var` inside a block affects the variable outside the block.
- Forgetting block-level scoping leads to hard-to-debug issues.
- Shadowing variables may cause confusion if not managed properly.

---

## Learn More

1. [MDN Web Docs: JavaScript Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
2. [JavaScript.info: Variable Scope, Closures](https://javascript.info/closure)
3. [W3Schools: JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
4. [MDN Web Docs: var, let, and const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
