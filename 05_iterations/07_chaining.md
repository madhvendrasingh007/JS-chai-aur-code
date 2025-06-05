# 📖 JavaScript Array Methods 📚

A beginner-friendly guide to mastering essential **JavaScript Array Methods** with practical, real-world examples. This document covers how to iterate, transform, and filter arrays efficiently in JavaScript — a must-have skill for any modern web developer.

---

## 📑 Table of Contents

* [🔄 forEach Method](#-foreach-method)
* [🗂️ filter Method](#-filter-method)
* [📝 map Method](#-map-method)
* [🔗 Method Chaining](#-method-chaining)
* [📊 Method Comparison Table](#-method-comparison-table)
* [📚 Additional Resources](#-additional-resources)

---

## 🔄 forEach Method

The **`forEach` method** executes a provided function once for each array element. It’s commonly used to perform side effects like logging or updating the UI.

### 📌 Basic Syntax

```javascript
array.forEach(callback(currentValue, index, array), thisArg)
```

### 📌 Key Points About forEach

* **Does not return anything** (returns `undefined`).
* Cannot break out of a `forEach` loop.
* Cannot directly store results in a variable.
* Best for iterating and performing actions without expecting a return value.

### 📌 Examples

```javascript
const coding = ["js", "ruby", "java", "python", "cpp"];

// Basic usage
coding.forEach(function(item) {
  console.log(item);
});

// Using arrow function
coding.forEach((item) => {
  console.log(item);
});

// Attempting to store results (won't work)
const val = coding.forEach((item) => {
  return item;
});
console.log(val); // Output: undefined
```

---

## 🗂️ filter Method

The **`filter` method** creates a new array with all elements that pass the test implemented by the provided function. It's ideal for extracting a subset of data.

### 📌 Basic Syntax

```javascript
array.filter(callback(element, index, array), thisArg)
```

### 📌 Key Points About filter

* **Returns a new array** containing elements that meet the condition.
* If no elements match, returns an empty array.
* Does not modify the original array.
* Frequently used in data processing and search operations.

### 📌 Examples

#### ✅ Basic Filtering

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums);  // Output: [5, 6, 7, 8, 9, 10]
```

#### 🔍 Comparing filter vs forEach for the Same Task

Using `filter`:

```javascript
const filteredNums = myNums.filter(num => num > 4);
```

Using `forEach`:

```javascript
const newNums2 = [];
myNums.forEach((num) => {
  if(num > 4) {
    newNums2.push(num);
  }
});
```

#### 📚 Filtering Objects

```javascript
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
];

// Filter books by genre
let userBooks = books.filter((bk) => bk.genre === 'History');

// Filter with multiple conditions
userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");
```

---

## 📝 map Method

The **`map` method** creates a new array by applying a function to each element of the original array — often used for transforming data.

### 📌 Basic Syntax

```javascript
array.map(callback(currentValue, index, array), thisArg)
```

### 📌 Key Points About map

* **Returns a new array** with transformed values.
* Keeps the same length as the original array.
* Does not modify the original array.
* Great for creating a new structure based on existing data.

### 📌 Examples

#### ✅ Basic Mapping

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => num + 10);

console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

---

## 🔗 Method Chaining

**Method chaining** allows you to call multiple array methods one after another, creating a clean and readable sequence of operations.

### 📌 Benefits of Chaining

* Makes code concise and readable.
* Avoids creating intermediate variables.
* Executes operations from left to right.

### 📌 Example of Method Chaining

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers
  .map((num) => num * 10)      // Multiply each by 10
  .map((num) => num + 1)       // Add 1 to each
  .filter((num) => num >= 40); // Keep numbers ≥ 40

console.log(result); // Output: [41, 51, 61, 71, 81, 91, 101]
```

**Operation Flow:**

1. Multiply all numbers by 10.
2. Add 1 to each.
3. Keep only numbers ≥ 40.

---

## 📊 Method Comparison Table

| Feature                 | forEach                      | filter                                 | map                             |
| :---------------------- | :--------------------------- | :------------------------------------- | :------------------------------ |
| **Return value**        | `undefined`                  | New array of elements passing the test | New array of transformed values |
| **Purpose**             | Execute code on each element | Create a filtered subset               | Transform each element          |
| **Original array**      | Unchanged                    | Unchanged                              | Unchanged                       |
| **Result array length** | N/A                          | Less than or equal to original         | Same as original                |
| **Can chain methods**   | No                           | Yes                                    | Yes                             |

---

## 📚 Additional Resources

* 📖 [MDN Web Docs - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* 📖 [MDN Web Docs - filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* 📖 [MDN Web Docs - map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* 📖 [JavaScript.info - Array methods](https://javascript.info/array-methods)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
