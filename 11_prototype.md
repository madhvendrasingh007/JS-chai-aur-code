## 📄 README.md — 📌 Understanding **Prototype in JavaScript**

---

# 📌 JavaScript Prototype — Explained in Detail 🚀

## 📖 What is Prototype?

In JavaScript, **every object has a hidden property called `[[Prototype]]`**, which is either `null` or references another object. This linked object is known as the **prototype**.

This prototype mechanism is how **inheritance** works in JavaScript — allowing objects to share properties and methods.

✅ In modern JavaScript, this hidden property can be accessed using:

```javascript
Object.getPrototypeOf(obj)
```

or using the `__proto__` property.

---

## 📌 Why is Prototype Important?

* Enables **method sharing** across object instances.
* Optimizes memory by avoiding method duplication.
* Forms the foundation of **prototypal inheritance**.

---

## 📌 How Does it Work? — 📊 Concept

When you try to access a property or method on an object:

1. JavaScript first checks the object itself.
2. If not found, it looks at the object's prototype.
3. If still not found, it keeps going up the chain (prototype of the prototype).
4. If it reaches `null`, it stops.

This is called the **Prototype Chain**.

---

## 📌 Code Example — With Detailed Comments 📝

### 🔸 Defining a Constructor Function and Adding Methods via Prototype

```javascript
// Constructor function to create a 'Person' object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the 'Person' prototype
Person.prototype.greet = function () {
  // This function will be shared across all instances of 'Person'
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of 'Person'
const person1 = new Person("Madhvendra", 24);
const person2 = new Person("Aman", 25);

// Calling the shared 'greet' method
person1.greet(); // Output: Hello, my name is Madhvendra and I am 24 years old.
person2.greet(); // Output: Hello, my name is Aman and I am 25 years old.
```

✅ **Explanation:**

* `Person.prototype.greet` ensures the greet function is **not duplicated for every instance**.
* Both `person1` and `person2` access the same `greet` method via the prototype chain.

---

## 📌 Prototype Chain Visual Representation 🖼️

```text
person1 --> Person.prototype --> Object.prototype --> null
```

* `person1` doesn't have `greet` method.
* It checks `Person.prototype`.
* If still not found, it checks `Object.prototype`.
* Finally reaches `null`.

---

## 📌 Prototype with Built-in Objects Example

```javascript
// All JavaScript objects inherit from Object.prototype by default

const arr = [1, 2, 3];

// 'toString' is not in 'arr' directly
console.log(arr.toString()); // Inherited from Array.prototype

// Verifying the prototype chain
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
```

✅ **Explanation:**

* Arrays have their prototype chain leading to `Array.prototype`.
* From `Array.prototype`, it goes to `Object.prototype`.
* Then to `null`.

---

## 📌 Object.create() and Custom Prototypes

```javascript
// Creating a prototype object
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

// Creating an object with 'animal' as its prototype
const dog = Object.create(animal);

dog.barks = true;

// Accessing properties
console.log(dog.eats); // true (inherited)
dog.walk();            // Animal walks (inherited)
console.log(dog.barks); // true (own property)
```

✅ **Explanation:**

* `Object.create()` creates a new object with the specified prototype.
* `dog` inherits from `animal` but can have its own properties too.

---

## 📌 Key Points to Remember 📌

* Prototypes enable **inheritance** and **method sharing**.
* Avoids duplication of methods.
* Every function in JavaScript has a **prototype property**.
* Every object has an internal `[[Prototype]]` (or `__proto__`).
* Built-in objects like `Array`, `Object`, `Function` also use prototype chains.

---

## 📌 Modern Syntax — `class` and `extends`

In modern ES6+ syntax, classes still use prototypes under the hood.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("Madhvendra");
p1.greet(); // Hi, I'm Madhvendra
```

✅ **Explanation:**

* `Person.prototype` contains `greet`.
* `p1` accesses it via prototype chain.

---

## 📌 Conclusion

JavaScript's prototype system is powerful and flexible. It underpins object inheritance and allows for efficient memory management by sharing methods.

Once you master prototypes, you gain deeper control over your code's structure and performance.

---

## 📌 📖 References:

* [MDN Web Docs on Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [JavaScript.info - Prototypes](https://javascript.info/prototype-inheritance)

---

> ✨ **Feel free to fork this repository and experiment with prototypes!**

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)