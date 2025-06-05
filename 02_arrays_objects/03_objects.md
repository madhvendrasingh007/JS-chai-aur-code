# JavaScript Data Structures

A comprehensive guide to understanding and working with arrays and objects in JavaScript.

## Table of Contents

- [Objects](#objects)
  - [Introduction to Objects](#introduction-to-objects)
  - [Creating Objects](#creating-objects)
  - [Accessing Object Properties](#accessing-object-properties)
  - [Symbols as Object Keys](#symbols-as-object-keys)
  - [Modifying Objects](#modifying-objects)
  - [Object Methods](#object-methods)
  - [The `this` Keyword](#the-this-keyword)
- [Resources for Learning](#resources-for-learning)


## Objects

### Introduction to Objects

Objects in JavaScript are collections of key-value pairs that store data and functionality together. They are one of the most important data structures in JavaScript and are used to represent real-world entities.

### Creating Objects

There are multiple ways to create objects in JavaScript:

#### Object Literals

The most common way to create objects:

```javascript
// Object literals
const JsUser = {
    name: "Madhvendra",
    "Full Name": "Madhvendra Singh",
    age: 23,
    location: "Jaipur",
    email: "madhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
```

#### Constructor Method

Creates singleton objects:

```javascript
// Using Object constructor
const user = new Object();

// Using Object.create()
const person = Object.create(null);
```

### Accessing Object Properties

There are two primary ways to access object properties:

#### Dot Notation

```javascript
console.log(JsUser.email);  // madhav@google.com
```

#### Bracket Notation

```javascript
// Required when property names have spaces or special characters
console.log(JsUser["Full Name"]);  // Madhvendra Singh
```

### Symbols as Object Keys

Symbols provide unique identifiers that can be used as object keys:

```javascript
// Creating a Symbol
const mySym = Symbol("Key1");

// Using Symbol as a key in an object
const JsUser = {
    [mySym]: "myKey1",  // Note the square brackets syntax
    name: "Madhvendra"
}

// Accessing properties with Symbol keys
console.log(JsUser[mySym]);  // myKey1

// Incorrect way (treats mySym as a string)
console.log(JsUser.mySym);  // undefined
```

### Modifying Objects

Objects in JavaScript are mutable by default:

```javascript
// Changing property values
JsUser.email = "madhav1@google.com";
console.log(JsUser.email);  // madhav1@google.com

// Preventing modifications
Object.freeze(JsUser);
JsUser.email = "shyam1@google.com";  // Will not change the object
console.log(JsUser.email);  // Still madhav1@google.com
```

### Object Methods

Objects can contain functions as properties, known as methods:

```javascript
// Adding methods to objects
JsUser.greeting = function() {
    console.log("Hello JS user");
}

// Calling object methods
JsUser.greeting();  // Hello JS user

// Getting function reference without calling
console.log(JsUser.greeting);  // [Function (anonymous)]
```

### The `this` Keyword

The `this` keyword refers to the current object within a method:

```javascript
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingTwo();  // Hello JS user, Madhvendra
```

## Resources for Learning

* [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [JavaScript.info - Arrays](https://javascript.info/array)
* [JavaScript.info - Objects](https://javascript.info/object)
* [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
* [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
* [Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)
* [Deep vs Shallow Copy in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)