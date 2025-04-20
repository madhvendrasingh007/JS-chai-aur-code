#  JavaScript: While and Do-While Loops

JavaScript provides additional looping mechanisms beyond the `for` loop: `while` and `do...while`. These are great when the number of iterations isn't known in advance.

---

## 🔁 While Loop

The loop continues **as long as** the condition is true.

```javascript
let i = 1, n = 5;

while (i <= n) {
    console.log(i);
    i++;
}
```

### Looping Through an Array

```javascript
let myArray = ['flash', 'batman', 'superman'];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}
```

---

## 🔄 Do...While Loop

This loop **executes at least once**, even if the condition is false at the start.

```javascript
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
```

- Output: `Score is 11`
- Why? Because the `do` block runs **before** the condition is checked.

---

## 📚 Resources

1. [MDN - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
2. [MDN - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
3. [JavaScript Loops - W3Schools](https://www.w3schools.com/js/js_loop_while.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
