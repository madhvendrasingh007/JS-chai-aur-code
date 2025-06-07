## 📄 README.md — 📌 Understanding **Lexical Scoping & Closures in JavaScript**

---

# 📌 JavaScript Lexical Scoping & Closures — Explained in Detail 🚀

---

## 📖 What is **Lexical Scoping**?

**Lexical scoping (static scoping)** means that the **scope of a variable is determined by its physical location in the source code**.
Nested functions have access to variables declared in their **outer (parent) scopes**.

In simpler terms:

* **Where a function is defined** decides what variables it has access to — not where it's called.

---

## 📌 Lexical Scoping Example — With Comments

```javascript
function outerFunction() {
  let outerVar = "I am from outerFunction";

  function innerFunction() {
    // Accessing outer function's variable due to lexical scoping
    console.log(outerVar);
  }

  innerFunction();
}

outerFunction(); // Output: I am from outerFunction
```

✅ **Explanation:**

* `innerFunction()` is defined inside `outerFunction()`.
* It can access `outerVar` because of **lexical scoping**.
* If you moved `innerFunction()` outside, it would no longer have access to `outerVar`.

---

## 📌 Nested Scoping Example

```javascript
function one() {
  let a = 10;

  function two() {
    let b = 20;

    function three() {
      console.log(a, b); // Both 'a' and 'b' accessible here
    }

    three();
  }

  two();
}

one(); // Output: 10 20
```

✅ **Explanation:**

* Function `three()` can access variables `a` and `b` because both are in its **lexical (outer) environment**.

---

## 📖 What is a **Closure**?

A **closure** is created when a function is able to remember and access its **lexical scope even when that function is executed outside of its original scope**.

In simple terms:

* A closure is a **function + its outer lexical environment**.

---

## 📌 Closure Example — With Comments

```javascript
function outer() {
  let counter = 0;

  // inner function forms a closure
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer();

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
```

✅ **Explanation:**

* `outer()` returns `inner()`.
* `inner()` still has access to `counter` because of closure, even though `outer()` has finished executing.
* The variable `counter` lives on in memory because it’s part of the **closure scope**.

---

## 📌 Real-World Use of Closures — Data Privacy

Closures are great for **data encapsulation**.

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log("Reset to", count);
    },
  };
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // Reset to 0
```

✅ **Explanation:**

* `count` is **private** — not directly accessible from outside.
* Functions inside the object **form closures over `count`**.

---

## 📌 Common Interview Example

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output after 1s, 2s, 3s: 4 4 4

// Fix using closure with IIFE
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
// Output: 1 2 3
```

✅ **Explanation:**

* The first loop prints `4 4 4` because by the time the callback runs, `i` is `4`.
* The IIFE creates a **closure capturing each value of `i`** at its iteration.

---

## 📌 Key Points to Remember 📌

* **Lexical scope** is defined by where variables and blocks of code are physically written.
* **Closures** allow functions to retain access to their lexical scope, even after the outer function has returned.
* Great for **private variables**, **function factories**, and **callbacks**.
* Avoid accidental memory leaks by not retaining unnecessary closures.

---

## 📌 📖 References:

* [MDN Web Docs on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [JavaScript.info - Lexical Environment](https://javascript.info/closure)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
