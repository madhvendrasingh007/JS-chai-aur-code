## 📄 README.md — 📌 Understanding **Class & Constructor in JavaScript**

---

# 📌 JavaScript Class & Constructor — Explained in Detail 🚀

## 📖 What is a Class in JavaScript?

In JavaScript, a **class** is a blueprint for creating objects with predefined properties and methods. It was introduced in **ES6 (ECMAScript 2015)** as a cleaner, more elegant syntax to implement prototypal inheritance.

> 💡 Under the hood, JavaScript classes still use prototypes — it's just syntactic sugar over the existing prototype-based inheritance.

---

## 📖 What is a Constructor?

A **constructor** is a special method within a class that is automatically called when a new object is created from the class.
It’s typically used to **initialize properties** of the object.

---

## 📌 Syntax of Class and Constructor

```javascript
class ClassName {
  constructor(parameter1, parameter2) {
    // Initialize object properties
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  // Method definition
  methodName() {
    console.log("Hello from method!");
  }
}
```

---

## 📌 Code Example — With Detailed Comments 📝

### 🔸 Defining a Class with a Constructor and Methods

```javascript
// Defining a 'Person' class
class Person {
  // 'constructor' method is called automatically when a new object is created
  constructor(name, age) {
    // Initializing object properties
    this.name = name;
    this.age = age;
  }

  // Defining a method inside the class
  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating instances of the 'Person' class using 'new' keyword
const person1 = new Person("Madhvendra", 24);
const person2 = new Person("Aman", 25);

// Calling the 'greet' method for each object
person1.greet(); // Output: Hi, my name is Madhvendra and I am 24 years old.
person2.greet(); // Output: Hi, my name is Aman and I am 25 years old.
```

✅ **Explanation:**

* `constructor()` is automatically called when `new Person()` is executed.
* `this` refers to the new object being created.
* Properties `name` and `age` are initialized for each new object.
* `greet()` is a class method that can be called on any instance.

---

## 📌 Adding Multiple Methods to a Class

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} has stopped.`);
  }
}

// Creating an object
const car1 = new Car("Tesla", "Model S");

// Calling methods
car1.start(); // Output: Tesla Model S is starting...
car1.stop();  // Output: Tesla Model S has stopped.
```

✅ **Explanation:**

* Multiple methods can be added inside the class.
* All instances can access these methods through the prototype chain.

---

## 📌 Inheritance using Classes

You can create a child class using the `extends` keyword and call the parent class constructor using `super()`.

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call parent class constructor using 'super'
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Bruno", "Labrador");
dog1.speak(); // Output: Bruno barks.
```

✅ **Explanation:**

* `extends` allows `Dog` to inherit properties and methods from `Animal`.
* `super()` is used to call the parent class constructor.
* Methods can be **overridden** in the child class.

---

## 📌 Key Points to Remember 📌

* `class` is a template for creating objects.
* `constructor()` initializes object properties.
* Use `new` keyword to create an instance of a class.
* Classes support **inheritance** using `extends` and `super()`.
* Class methods are stored in the prototype, optimizing memory.

---

## 📌 Prototype Chain with Classes (Under the Hood)

Even with `class` syntax, JavaScript internally uses prototypes.

```text
object --> Class.prototype --> Object.prototype --> null
```

---

## 📌 Modern Features (Optional)

* You can also use **private fields** (with `#`) in ES2021+.

```javascript
class Example {
  #privateField = "This is private";

  show() {
    console.log(this.#privateField);
  }
}

const ex = new Example();
ex.show(); // Output: This is private
```

---

## 📌 Conclusion

JavaScript classes provide a clean, intuitive, and organized way to structure code using object-oriented principles.
While classes are relatively new, they build upon JavaScript’s powerful prototype-based system, offering a more familiar syntax for developers coming from classical OOP languages.

---

## 📌 📖 References:

* [MDN Web Docs on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [JavaScript.info - Classes](https://javascript.info/class)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)