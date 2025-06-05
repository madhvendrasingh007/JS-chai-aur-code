# 📚 JavaScript Array Methods

A guide to understanding essential array methods in JavaScript with detailed explanations and practical examples.

---

## 🔍 forEach Method

The `forEach` method is used to **execute a provided function once for each array element**, in order. It’s mostly useful when you need to perform an operation on each element of an array, but you don't need to create a new array based on the results.

---

### 📖 Basic Syntax

```javascript
array.forEach(callback(currentValue, index, array), thisArg)
```

* **callback** — A function that gets called for each element.
* **currentValue** — The current element being processed.
* **index** *(optional)* — The index of the current element.
* **array** *(optional)* — The array `forEach` was called upon.
* **thisArg** *(optional)* — Value to use as `this` when executing callback.

---

### ✅ Key Points About forEach

* **Does not return a new array** — it always returns `undefined`.
* You **cannot break, return early, or use continue** inside a `forEach` like you can with a regular `for` loop.
* It is typically used when you need to perform **side effects**, like logging, modifying the DOM, or updating external variables.
* You **cannot store results** of operations performed within `forEach` into a variable directly.

---

### ✨ Examples

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

// Attempting to store forEach results (won't work)
const val = coding.forEach((item) => {
  return item;  // This return is effectively ignored by forEach
});
console.log(val);  // Output: undefined
```

**Explanation:**
In this example:

* The function runs for each item in the array and logs it.
* Even though there’s a `return` statement inside the arrow function, `forEach` does not capture these returned values.
* The value stored in `val` is always `undefined`.

---

## 🔍 filter Method

The `filter` method is used to **create a new array with all the elements that pass a test implemented by the provided function**.

---

### 📖 Basic Syntax

```javascript
array.filter(callback(element, index, array), thisArg)
```

* **callback** — Function to test each element.
* **element** — The current element being processed.
* **index** *(optional)* — The index of the current element.
* **array** *(optional)* — The array `filter` was called upon.
* **thisArg** *(optional)* — Value to use as `this` when executing callback.

---

### ✅ Key Points About filter

* It **returns a new array** containing only the elements that pass the provided test (i.e. where callback returns `true`).
* If no elements match, it returns an empty array.
* The original array remains **unchanged**.
* `filter` can be used with numbers, strings, objects — any array elements.

---

### ✨ Examples

#### Basic Filtering

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// With explicit return inside curly braces
const newNums = myNums.filter((num) => {
  return num > 4;
});

// With implicit return (no curly braces needed for single expressions)
const newNumsShort = myNums.filter((num) => num > 4);

console.log(newNums);  // Output: [5, 6, 7, 8, 9, 10]
```

**Explanation:**
In this example:

* The callback checks if each number is greater than 4.
* If `true`, that number is included in the new array.
* `filter` iterates over all items and returns the filtered array.

---

#### Comparing filter vs forEach for the same task

Using `filter` is straightforward:

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNums = myNums.filter(num => num > 4);
```

Doing the same with `forEach` is more verbose:

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums2 = [];

myNums.forEach((num) => {
  if(num > 4) {
    newNums2.push(num);
  }
});
```

**Explanation:**

* With `forEach`, you have to manually manage the new array (`newNums2`) and push matching elements.
* With `filter`, this is handled internally and returned as a new array.

---

#### Filtering Objects Example

```javascript
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books with 'History' genre
let userBooks = books.filter((bk) => bk.genre === 'History');

// Filter books published after 1995 and with 'History' genre
userBooks = books.filter((bk) => { 
  return bk.publish >= 1995 && bk.genre === "History";
});
```

**Explanation:**

* The first filter finds all books where the genre is exactly `'History'`.
* The second filter checks for multiple conditions: the book should be published after or in 1995 **and** the genre should be `'History'`.

---

## 📊 Key Differences Between forEach and filter

| Feature                         | forEach                      | filter                         |
| :------------------------------ | :--------------------------- | :----------------------------- |
| **Return Value**                | `undefined`                  | New array of filtered elements |
| **Primary Purpose**             | Run code for each array item | Create a subset of array items |
| **Can Store Results Directly?** | No                           | Yes                            |
| **Modifies Original Array?**    | No                           | No                             |
| **Can Break Early?**            | No                           | No                             |

---

## 📚 Additional Resources

* 📖 [MDN Web Docs - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* 📖 [MDN Web Docs - filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* 📖 [JavaScript.info - Array methods](https://javascript.info/array-methods)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
