# JavaScript Execution Context & Threading Model

This guide explains how JavaScript executes code under the hood using the **Execution Context**, and dives into why JavaScript is **single-threaded**.

---

## 🚀 What is Execution Context?

Execution Context refers to how JavaScript executes code, step-by-step. Each JavaScript file and function runs inside an **Execution Context**, which is like a container that holds the environment and variables.

---

## 🧠 Phases of JavaScript Execution

### 1. **Global Execution Context (GEC)**

- Created when JavaScript starts executing a file.
- `this` is set to the global object:
  - In browser: `window`
  - In Node.js: `{}` (empty object)
- Code outside any function runs here.

```javascript
// Code outside any function runs in Global Execution Context
```

---

### 2. **Memory Phase (Creation Phase)**

- JS engine scans the code.
- Memory is allocated for:
  - Variables → `undefined`
  - Functions → Complete function definition

```javascript
const val1 = 10;
const val2 = 20;
const result1 = addNum(val1, val2); // Function call
```

During Memory Phase:

| Variable | Value      |
|----------|------------|
| val1     | undefined  |
| val2     | undefined  |
| addNum   | [Function] |
| result1  | undefined  |

---

### 3. **Execution Phase**

- Actual code runs line-by-line.
- Values are assigned.
- When a function is called, a **new Functional Execution Context** is created with its **own**:
  - Memory Phase
  - Execution Phase

> After a function completes, its execution context is destroyed and its return value is passed back.

---

## 🧵 JavaScript is Single-Threaded

- **Single-threaded:** Can do only **one task at a time**.
- Executes code **sequentially** – one line after the other.
- Each task **must finish** before the next one begins.

### Why Single Threaded?

- JavaScript was created in 1995 for simple interactivity in browsers.
- To avoid complexity and improve performance, it was designed to be single-threaded.
- Browsers are **event-driven**, so JavaScript relies on the **event loop** for concurrency.

---

## 🧵 Threads vs Multi-Threading

| Feature           | Single Thread        | Multi-Thread           |
|------------------|----------------------|------------------------|
| Simultaneous Tasks | ❌                  | ✅                      |
| Memory Sharing     | N/A                 | ✅                      |
| Complexity         | Simple              | More Complex           |
| Languages          | JavaScript          | Python, Java, C++ etc. |

---

## 🛠 Example: Function Execution Context

```javascript
function addNum(num1, num2) {
    return num1 + num2;
}

const val1 = 10;
const val2 = 20;

const result = addNum(val1, val2);  // Creates a new execution context
console.log(result);  // 30
```

---

## 📚 References & Learning Resources

1. [JavaScript Execution Context - Chai aur Code (YouTube)](https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25&ab_channel=ChaiaurCode)
2. [MDN Docs: Execution Context](https://developer.mozilla.org/en-US/docs/Glossary/Execution_context)
3. [MDN: Call Stack & Execution](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
4. [JavaScript Event Loop - Philip Roberts (JSConf EU)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
