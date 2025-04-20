# JavaScript Array Methods - forEach

A guide to understanding the forEach method in JavaScript arrays.

## Overview

The `forEach` method executes a provided function once for each array element. It's a simple way to iterate through arrays without using traditional loops.

## Basic Syntax

```javascript
array.forEach(callback(currentValue, index, array), thisArg)
```

Where:
- `callback`: Function to execute on each element
- `currentValue`: The current element being processed
- `index` (optional): The index of the current element
- `array` (optional): The array forEach was called upon
- `thisArg` (optional): Value to use as `this` when executing callback

## Examples

### Basic Usage

```javascript
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function(item) {
  console.log(item);
});
// Output: js, ruby, java, python, cpp
```

### Using Arrow Function

```javascript
coding.forEach((item) => {
  console.log(item);
});
// Output: js, ruby, java, python, cpp
```

### Using All Parameters

```javascript
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
// Output: 
// js 0 ["js", "ruby", "java", "python", "cpp"]
// ruby 1 ["js", "ruby", "java", "python", "cpp"]
// etc.
```

### Using External Function

```javascript
function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);
```

### Iterating Through Array of Objects

```javascript
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
// Output: javascript, java, python
```

## Key Points to Remember

- `forEach` doesn't return anything (returns undefined)
- You cannot break out of a `forEach` loop (unlike `for` or `while` loops)
- It's great for simple iteration when you don't need to transform data
- For transforming data, consider using `map`, `filter`, or `reduce` instead

## Additional Resources

- [MDN Web Docs - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [JavaScript.info - Array methods](https://javascript.info/array-methods)
- [W3Schools - JavaScript Array forEach](https://www.w3schools.com/jsref/jsref_foreach.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)