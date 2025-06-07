## 📄 README.md — 📌 Understanding **Getter/Setter in JavaScript** & **Stack Overflow Error**

---

# 📌 JavaScript Getters and Setters — Explained in Detail 🚀

## 📖 What are Getters and Setters?

* **Getters (`get`)** and **Setters (`set`)** are special methods in JavaScript classes or objects that allow controlled access to properties.
* They’re often used to **encapsulate internal object state** and add logic when reading or updating properties.

---

## 📌 Syntax

```javascript
class Example {
  constructor(value) {
    this._value = value; // Using underscore convention for internal property
  }

  // Getter method
  get value() {
    return this._value;
  }

  // Setter method
  set value(newValue) {
    this._value = newValue;
  }
}
```

---

## 📌 Code Example — With Detailed Comments 📝

### 🔸 Using Getter and Setter in a Class

```javascript
class Person {
  constructor(name) {
    // Internal property with underscore naming
    this._name = name;
  }

  // Getter method to access the value
  get name() {
    console.log("Getter called");
    return this._name;
  }

  // Setter method to update the value
  set name(newName) {
    console.log("Setter called");
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name!");
    }
  }
}

// Creating an object instance
const person1 = new Person("Madhvendra");

// Using getter to read the value
console.log(person1.name); // Getter called → Madhvendra

// Using setter to update the value
person1.name = "Aman"; // Setter called

// Checking updated value
console.log(person1.name); // Getter called → Aman
```

✅ **Explanation:**

* The **getter** `name()` lets you safely read `_name`.
* The **setter** `name()` validates the input before updating `_name`.
* Underscore `_name` is a naming convention to indicate a private-like property (since true private properties use `#` in modern JS).

---

## 📌 Getters & Setters in Plain Objects

```javascript
const person = {
  firstName: "Madhvendra",
  lastName: "Singh",

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName); // Madhvendra Singh

// Using setter to update firstName and lastName
person.fullName = "Aman Kumar";
console.log(person.fullName); // Aman Kumar
```

✅ **Explanation:**

* **Getters and setters** act like normal properties, but run behind-the-scenes methods when accessed or updated.

---

## 📌 Key Points to Remember 📌

* Getters and setters control how properties are read or written.
* Can be used for validation, formatting, or derived properties.
* In modern JavaScript, private fields can use `#fieldName`.
* Avoid infinite loops by using **different property names inside getters/setters**.

---

# 📌 Stack Overflow Error in JavaScript ⚠️

## 📖 What is Stack Overflow?

A **Stack Overflow error** happens when the **call stack exceeds its maximum limit** — usually due to **infinite recursion** (a function calling itself without a terminating condition).

---

## 📌 Example of Stack Overflow Error

```javascript
function recursiveFunc() {
  // Function calls itself infinitely
  return recursiveFunc();
}

recursiveFunc(); // RangeError: Maximum call stack size exceeded
```

✅ **Explanation:**

* The function keeps calling itself.
* The call stack grows indefinitely.
* Browser or JS engine halts execution when max stack size is breached.

---

## 📌 Safer Recursive Function Example

```javascript
function countDown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countDown(n - 1); // Recursive call with decreasing value
}

countDown(5);
// Output: 5 4 3 2 1 Done!
```

✅ **Explanation:**

* Recursion has a **base condition (`if (n <= 0)`)** to stop further calls.
* Prevents stack overflow by terminating properly.

---

## 📌 Key Points to Remember 📌

* Always include a **base case in recursive functions**.
* Deep recursion can still cause stack overflow — use loops or iterative solutions for very large input sizes.
* Modern JavaScript engines have optimized tail-call recursion in strict mode (but support is limited).

---

## 📌 📖 References:

* [MDN Web Docs on Getters/Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
* [MDN Web Docs on Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
