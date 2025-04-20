# JavaScript Array Methods

A guide to understanding key array methods in JavaScript with practical examples.

## forEach Method

The `forEach` method executes a provided function once for each array element.

### Basic Syntax

```javascript
array.forEach(callback(currentValue, index, array), thisArg)
```

### Key Points About forEach

- **Does not return anything** (returns undefined)
- Cannot break out of a `forEach` loop
- Cannot directly store results in a variable

### Examples

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
  return item;  // This return is effectively ignored
});
console.log(val);  // Output: undefined
```

## filter Method

The `filter` method creates a new array with elements that pass a test implemented by the provided function.

### Basic Syntax

```javascript
array.filter(callback(element, index, array), thisArg)
```

### Key Points About filter

- **Returns a new array** containing elements that pass the test
- If no elements pass the test, an empty array is returned
- Does not modify the original array

### Examples

#### Basic Filtering

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// With explicit return
const newNums = myNums.filter((num) => {
  return num > 4;
});

// With implicit return (no curly braces)
const newNumsShort = myNums.filter((num) => num > 4);

console.log(newNums);  // Output: [5, 6, 7, 8, 9, 10]
```

#### Comparing filter vs forEach for the same task

Using `filter` is more concise:
```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNums = myNums.filter(num => num > 4);
```

Using `forEach` requires more code:
```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums2 = [];

myNums.forEach((num) => {
  if(num > 4) {
    newNums2.push(num);
  }
});
```

#### Filtering Objects

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

// Filter with multiple conditions
userBooks = books.filter((bk) => { 
  return bk.publish >= 1995 && bk.genre === "History";
});
```

## map Method

The `map` method creates a new array by calling a function on every element in the calling array.

### Basic Syntax

```javascript
array.map(callback(currentValue, index, array), thisArg)
```

### Key Points About map

- **Returns a new array** with transformed elements
- The new array will have the same length as the original array
- Does not modify the original array
- Very useful for data transformations

### Examples

#### Basic Mapping

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// With implicit return (single expression)
const newNums = myNumbers.map((num) => num + 10);

// With explicit return (using curly braces)
const newNumsExplicit = myNumbers.map((nums) => {
  return nums + 10;
});

console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

## Method Chaining

JavaScript allows you to chain array methods together, applying multiple operations in sequence.

### Benefits of Chaining

- Makes code more concise and readable
- Avoids creating unnecessary intermediate variables
- Operations are executed from left to right

### Example of Method Chaining

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers
  .map((num) => num * 10)     // First multiply each number by 10
  .map((num) => num + 1)      // Then add 1 to each result
  .filter((num) => num >= 40); // Finally, keep only results >= 40

console.log(result); // Output: [41, 51, 61, 71, 81, 91, 101]
```

In this example:
1. First `map`: Transform `[1,2,3,...]` to `[10,20,30,...]`
2. Second `map`: Transform `[10,20,30,...]` to `[11,21,31,...]`
3. `filter`: Keep only values ≥ 40, resulting in `[41,51,61,71,81,91,101]`

## Method Comparison Table

| Feature | forEach | filter | map |
|---------|---------|--------|-----|
| Return value | `undefined` | New filtered array | New transformed array |
| Purpose | Execute code | Create subset | Transform elements |
| Original array | Unchanged | Unchanged | Unchanged |
| Result array length | N/A | ≤ original | Same as original |
| Can chain methods | No | Yes | Yes |

## Additional Resources

- [MDN Web Docs - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN Web Docs - filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs - map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript.info - Array methods](https://javascript.info/array-methods)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)