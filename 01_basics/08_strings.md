# JavaScript String Handling Guide

A practical overview of how to work with strings in JavaScript using various methods including interpolation, object creation, and built-in string methods.

---

## String Declaration and Interpolation

```javascript
const name = "Madhvendra Singh";
const age = 23;

// Normal concatenation
console.log(name + " " + age); // Madhvendra Singh 23

// Template literals (recommended)
console.log(`Hello my name is ${name} and my age is ${age}`); 
// Output: Hello my name is Madhvendra Singh and my age is 23
```

---

## String Object Creation

```javascript
const newName = new String('Madhav'); // Provides additional functionality

console.log(newName);              // [String: 'Madhav']
console.log(typeof newName);       // object
console.log(newName[0]);           // M
console.log(newName[1]);           // a
console.log(newName.__proto__);    // String prototype
```

---

## Useful String Methods

```javascript
console.log(newName.length);         // 6
console.log(newName.toUpperCase());  // MADHAV
console.log(newName.charAt(2));      // d
console.log(newName.indexOf('h'));   // 3
console.log(newName.substring(0, 4)); // Madh
console.log(newName.slice(0, 4));    // Madh
console.log(newName.slice(-5, 5));   // adha
```

> **Note**: `substring()` does not accept negative indexes, while `slice()` does.

---

## Trimming Strings

```javascript
const name1 = "   Md   ";
console.log(name1);         // "   Md   "
console.log(name1.trim()); // "Md"
```

- Use `trimStart()` and `trimEnd()` for selective trimming (only removes whitespace and line terminators).

---

## URL Manipulation

```javascript
const url = "https://helloWorld/madhav%20singh";
console.log(url.replace('%20', '-')); 
// Output: https://helloWorld/madhav-singh
```

---

## Splitting Strings

```javascript
const sp = "Madhvendra Singh 20";
console.log(sp.split(' ')); 
// Output: [ 'Madhvendra', 'Singh', '20' ]

const sp2 = "Hello-world";
console.log(sp2.split('-')); 
// Output: [ 'Hello', 'world' ]
```

---

## Learn More

For more information about JavaScript string handling and data types:

1. [MDN Web Docs: JavaScript String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
2. [JavaScript.info: Strings](https://javascript.info/string)
3. [W3Schools: JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
4. [MDN: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh)