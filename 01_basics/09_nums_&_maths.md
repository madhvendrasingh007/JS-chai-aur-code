# JavaScript Numbers and Math Object

A quick guide covering number types, number object methods, and working with the `Math` object in JavaScript.

---

## Number Basics

```javascript
const num1 = 400;
console.log(num1);  // 400

const num2 = new Number(100);
console.log(num2);  // [Number: 100]

console.log(num2.toFixed(1));   // 100.0
```

### Useful Number Methods

```javascript
const num3 = 128.61827;
console.log(num3.toPrecision(3));   // "129"

const num4 = 28.61827;
console.log(num4.toPrecision(3));   // "28.6"

const num5 = 10000000;
console.log(num5.toLocaleString());         // "10,000,000" (US format)
console.log(num5.toLocaleString('en-IN'));  // "1,00,00,000" (Indian format)

console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
```

---

## JavaScript Math Object

JavaScript provides the global `Math` object for performing mathematical operations and constants.

### Common Math Methods

```javascript
console.log(Math);           // [Math] object
console.log(Math.PI);        // 3.141592653589793
console.log(Math.abs(-4));   // 4
console.log(Math.round(4.66));  // 5
console.log(Math.ceil(4.26));   // 5
console.log(Math.floor(4.26));  // 4

console.log(Math.min(23, 12, 4, 25));  // 4
console.log(Math.max(23, 12, 4, 25));  // 25
```

### Random Numbers in JavaScript

```javascript
console.log(Math.random());  // Random decimal between 0 and 1

// To get a random number between 1 and 10:
console.log(Math.floor(Math.random() * 10) + 1);

// To get a random number within a specific range (min to max):
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

---

## Learn More

1. [MDN Web Docs: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
2. [MDN Web Docs: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
3. [JavaScript.info: Numbers](https://javascript.info/number)
4. [W3Schools: JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
