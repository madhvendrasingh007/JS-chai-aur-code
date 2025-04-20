# JavaScript: For Loops, Nested Loops, and Control Flow

This section introduces the `for` loop in JavaScript, its usage with arrays, nested loops, and how to control loop execution using `break` and `continue`.

---

## 🔄 Basic For Loop

```javascript
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
```

- `let i = 0` – Start the counter.
- `i <= 10` – Condition to keep looping.
- `i++` – Increment each iteration.

---

## 🔁 Nested For Loop

Used for patterns, tables, or matrix-like data:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

---

## 📦 Iterating Over Arrays

```javascript
let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
```

---

## ⛔ Break Statement

Used to **exit** the loop immediately when a condition is met.

```javascript
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}
```

---

## 🔁 Continue Statement

Used to **skip** the current iteration but continue the loop.

```javascript
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
```

---

## 📚 Resources

1. [MDN - for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
2. [JavaScript Loops - W3Schools](https://www.w3schools.com/js/js_loop_for.asp)
3. [Break and Continue - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
