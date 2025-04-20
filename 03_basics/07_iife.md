# 🔁 Immediately Invoked Function Expression (IIFE) in JavaScript

In JavaScript, an **Immediately Invoked Function Expression (IIFE)** is a function that runs **as soon as it is defined**.

---

## 🤔 Why Use IIFE?

- **Avoid polluting the global scope**
- Useful in **module patterns** or creating **private variables**
- Helps in **encapsulation**

---

## 🔍 Regular Function Declaration

```javascript
function chai() {
    console.log("DB Connected");
}

chai(); // ✅ Output: DB Connected
```

In the above example, the function `chai()` is declared and invoked **separately**.

---

## ⚡ IIFE Syntax and Usage

```javascript
(function chai2() {
    console.log("Hello World");
})();
```

✅ Output: `Hello World`

### 💡 Key Syntax Notes

- Wrap the function in parentheses: `(function...)`
- Add a second pair of parentheses `()` to **immediately invoke** it.

---

## 🧪 IIFE with Arrow Functions

```javascript
(() => {
    console.log("Arrow Function IIFE");
})();
```

✅ Output: `Arrow Function IIFE`

---

## 🧠 When to Use IIFE

- When you want a function to **run once** immediately.
- When you want to **avoid variable conflicts** in a shared/global environment.
- When using **module patterns** (before ES6 modules).

---

## 📚 References for Learning

1. [MDN Docs: IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
2. [JavaScript.info: IIFE](https://javascript.info/closures#iife)
3. [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_function_definition.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
