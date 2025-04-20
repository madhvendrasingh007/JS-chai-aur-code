# 🔍 JavaScript Conditionals – if, else, else if, &&, ||

This section explains how JavaScript handles conditional logic using `if`, `else`, `else if`, logical AND (`&&`), logical OR (`||`), and comparison operators.

---

## 🚦 Basic `if-else` Condition

```javascript
const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
```

✅ Output: `temperature is greater than 50`

---

## 🔢 Comparison Operators

| Operator | Meaning                    |
|----------|----------------------------|
| `<`      | Less than                  |
| `>`      | Greater than               |
| `<=`     | Less than or equal to      |
| `>=`     | Greater than or equal to   |
| `==`     | Equal to (loose)           |
| `!=`     | Not equal to (loose)       |
| `===`    | Equal to (strict)          |
| `!==`    | Not equal to (strict)      |

---

## 🦸 Scope in Conditional Blocks

```javascript
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // ✅ Accessible here
}

console.log(`User power: ${power}`); // ❌ Error: power is not defined
```

> `let` and `const` are **block-scoped**, meaning they are only accessible within the `{}` block they are defined in.

---

## 📏 Short-Hand `if` Statement

```javascript
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
```

> This is a short-hand for a one-liner `if` block, but not recommended for readability when there are multiple actions.

---

## 📚 Multiple Conditions – `else if` Chain

```javascript
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
```

✅ Output: `less than 1200`

---

## 🔗 Logical Operators – `&&` and `||`

### ✅ AND (`&&`)

```javascript
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
// ✅ Only runs if all conditions are true
```

### ✅ OR (`||`)

```javascript
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// ✅ Runs if **any** one condition is true
```

✅ Output: `User logged in`

---

## 📘 References to Learn More

1. [MDN Web Docs: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
2. [JavaScript.info: Logical Operators](https://javascript.info/logical-operators)
3. [W3Schools: JavaScript Conditions](https://www.w3schools.com/js/js_if_else.asp)
4. [MDN: Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
