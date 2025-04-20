# JavaScript Objects

A comprehensive guide to working with objects in JavaScript, covering creation, manipulation, and common operations.

## Table of Contents
- [Creating Objects](#creating-objects)
- [Object Properties](#object-properties)
- [Nested Objects](#nested-objects)
- [Optional Chaining](#optional-chaining)
- [Combining Objects](#combining-objects)
- [Object Methods](#object-methods)
- [Resources for Learning](#resources-for-learning)

## Creating Objects

JavaScript offers different ways to create objects:

```javascript
// Singleton object (using constructor)
const tinderUser1 = new Object();

// Non-Singleton object (object literal syntax)
const tinderUser = {};
tinderUser.id = "123";
tinderUser.name = "Madhav";
tinderUser.isLoggedIn = false;
```

## Object Properties

Properties can be added, modified, and accessed easily:

```javascript
// Adding properties
tinderUser.id = "123";
tinderUser.name = "Madhav";

// Accessing properties
console.log(tinderUser.name); // Madhav
console.log(tinderUser["name"]); // Alternative syntax
```

## Nested Objects

Objects can contain other objects, creating nested structures:

```javascript
const regularUser = {
    email: "madhav@google.com",
    fullname: {
        userfullname: {
            firstname: "Madhvendra",
            lastname: "Singh"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); // Madhvendra
```

## Optional Chaining

Prevent errors when accessing properties that might not exist:

```javascript
// Safe property access with optional chaining
console.log(regularUser.fullname?.userfullname?.firstname);
```

## Combining Objects

Multiple ways to combine objects:

```javascript
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Method 1: Object nesting (creates nested objects, not merged)
const obj3 = {obj1, obj2};
// Result: { obj1: {1: "a", 2: "b"}, obj2: {3: "c", 4: "d"} }

// Method 2: Object.assign()
const obj4 = Object.assign({}, obj1, obj2);
// Result: {1: "a", 2: "b", 3: "c", 4: "d"}

// Method 3: Spread operator (recommended)
const obj5 = {...obj1, ...obj2};
// Result: {1: "a", 2: "b", 3: "c", 4: "d"}
```

## Object Methods

Useful built-in methods for working with objects:

```javascript
// Get all keys as an array
Object.keys(tinderUser); // ["id", "name", "isLoggedIn"]

// Get all values as an array
Object.values(tinderUser); // ["123", "Madhav", false]

// Get key-value pairs as arrays
Object.entries(tinderUser); // [["id", "123"], ["name", "Madhav"], ["isLoggedIn", false]]

// Check if object has a specific property
tinderUser.hasOwnProperty("isLoggedIn"); // true
tinderUser.hasOwnProperty("isLogged"); // false
```

## Resources for Learning

- [MDN Web Docs: JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info: Objects](https://javascript.info/object)
- [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
- [Modern JavaScript Tutorial](https://javascript.info/)
- [You Don't Know JS: Objects & Classes](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/objects-classes/README.md)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)