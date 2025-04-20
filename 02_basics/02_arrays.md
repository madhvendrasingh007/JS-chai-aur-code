# JavaScript Arrays

A comprehensive guide to understanding and working with arrays in JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [Creating Arrays](#creating-arrays)
- [Accessing Elements](#accessing-elements)
- [Array Methods](#array-methods)
  - [Adding Elements](#adding-elements)
  - [Removing Elements](#removing-elements)
  - [Search and Check](#search-and-check)
  - [Conversion Methods](#conversion-methods)
- [Slice vs Splice](#slice-vs-splice)
- [Merging Arrays](#merging-arrays)
- [Nested Arrays](#nested-arrays)
- [Array Utility Methods](#array-utility-methods)
- [Resources for Learning](#resources-for-learning)

## Introduction

An array is a special variable that can hold multiple values. Key characteristics of JavaScript arrays:

- **Resizable**: Can grow or shrink dynamically
- **Mixed data types**: Can contain different types of elements (strings, numbers, objects, etc.)
- **Zero-indexed**: First element is at index 0, second at index 1, etc.
- **Shallow copying**: Array copy operations create shallow copies rather than deep copies

## Creating Arrays

There are two main ways to create arrays in JavaScript:

```javascript
// Array literal syntax (preferred)
const myArr = [0, 21, 12, 53, 4];

// Using the Array constructor
const myArr2 = new Array(12, 33, 1, 43);

// Array of strings
const myHeros = ["Iron Man", "BatMan", "Thor"];
```

## Accessing Elements

Access array elements using their index:

```javascript
const myArr = [0, 21, 12, 53, 4];
console.log(myArr[3]); // 53
```

## Array Methods

### Adding Elements

```javascript
// Add to the end of array
myArr.push(19);
myArr.push(7);
// Result: [0, 21, 12, 53, 4, 19, 7]

// Add to the beginning of array
myArr.unshift(9);
// Result: [9, 0, 21, 12, 53, 4]
```

### Removing Elements

```javascript
// Remove from the end of array
myArr.pop();
// Result: [0, 21, 12, 53]

// Remove from the beginning of array
myArr.shift();
// Result: [21, 12, 53, 4]
```

### Search and Check

```javascript
// Check if value exists in array
console.log(myArr.includes(99)); // false

// Find index of element
console.log(myArr.indexOf(99)); // -1 (not found)
console.log(myArr.indexOf(12)); // 2
```

### Conversion Methods

```javascript
// Convert array to string
const newArr = myArr.join();
console.log(newArr); // "0,21,12,53,4"
console.log(typeof newArr); // String
```

## Slice vs Splice

These methods can be confusing but have important differences:

### Slice
- Creates a new array with selected elements
- Does not modify the original array
- End index is NOT included in the result

```javascript
const myArr = [0, 21, 12, 53, 4];
const myN1 = myArr.slice(1, 3);
console.log(myN1); // [21, 12]
console.log("Original array after slice:", myArr); // [0, 21, 12, 53, 4] (unchanged)
```

### Splice
- Modifies the original array
- Returns removed elements as a new array
- Second parameter is count of elements to remove
- Can also insert new elements

```javascript
const myArr = [0, 21, 12, 53, 4];
const myN2 = myArr.splice(1, 3); // Remove 3 elements starting at index 1
console.log(myN2); // [21, 12, 53] (removed elements)
console.log("Original array after splice:", myArr); // [0, 4] (modified)
```

## Merging Arrays

There are multiple ways to combine arrays in JavaScript:

### Using push() (Creates nested array)

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros); 
// ['thor', 'Ironman', 'spiderman', ['superman', 'flash', 'batman']]

// Accessing nested array elements
console.log(marvel_heros[3][1]); // 'flash'
```

### Using concat() (Creates flat array)

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 
// ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']
```

### Using Spread Operator (Modern approach)

```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']
```

## Nested Arrays

JavaScript arrays can contain other arrays, creating multi-dimensional arrays:

### Flattening Nested Arrays

The `flat()` method creates a new array with all sub-array elements concatenated:

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten nested arrays to a single level array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

## Array Utility Methods

JavaScript provides several utility methods for working with arrays:

### Array.isArray()

Checks if a value is an array:

```javascript
console.log(Array.isArray("Madhvendra")); // false
console.log(Array.isArray([1, 2, 3])); // true
```

### Array.from()

Creates a new array from an array-like or iterable object:

```javascript
console.log(Array.from("Madhvendra")); 
// ['M', 'a', 'd', 'h', 'v', 'e', 'n', 'd', 'r', 'a']

// Note: Returns empty array when object doesn't have a length property
console.log(Array.from({name: "madhvendra"})); // []
```

### Array.of()

Creates a new array from a variable number of arguments:

```javascript
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
```

## Resources for Learning

* [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JavaScript.info - Arrays](https://javascript.info/array)
* [W3Schools JavaScript Array Tutorial](https://www.w3schools.com/js/js_arrays.asp)
* [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
* [Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)
* [Deep vs Shallow Copy in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
* [Slice vs Splice Explained](https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)