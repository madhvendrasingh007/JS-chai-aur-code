# JavaScript Comparisons

A comprehensive guide to comparison operators and their behavior in JavaScript.

## Basic Comparison Operators

JavaScript provides several operators for comparing values:

| Operator | Name | Description |
|----------|------|-------------|
| `==` | Equality | Compares values, performs type coercion |
| `===` | Strict equality | Compares values and types, no type coercion |
| `!=` | Inequality | Compares values, performs type coercion |
| `!==` | Strict inequality | Compares values and types, no type coercion |
| `>` | Greater than | Checks if left value is greater than right |
| `<` | Less than | Checks if left value is less than right |
| `>=` | Greater than or equal | Checks if left value is greater than or equal to right |
| `<=` | Less than or equal | Checks if left value is less than or equal to right |

## Equality vs. Strict Equality

### Equality (`==`)

The equality operator compares values after converting them to a common type (type coercion).

```javascript
console.log(5 == "5");     // true (string "5" is converted to number 5)
console.log(true == 1);    // true (boolean true is converted to number 1)
console.log(null == undefined);  // true (special case in JavaScript)
console.log(0 == false);   // true (boolean false is converted to number 0)
console.log("" == false);  // true (both are converted to number 0)
```

### Strict Equality (`===`)

The strict equality operator compares both values and types without any type conversion.

```javascript
console.log(5 === "5");    // false (number vs string)
console.log(true === 1);   // false (boolean vs number)
console.log(null === undefined);  // false (null vs undefined)
console.log(0 === false);  // false (number vs boolean)
console.log("" === false); // false (string vs boolean)
```

## Inequality Comparisons

The inequality (`!=`) and strict inequality (`!==`) operators work as the logical opposites of their equality counterparts.

```javascript
console.log(5 != "5");     // false (they are equal after coercion)
console.log(5 !== "5");    // true (different types: number vs string)
console.log(true != 1);    // false (they are equal after coercion)
console.log(true !== 1);   // true (different types: boolean vs number)
```

## Comparing Different Types

When comparing values of different types, JavaScript follows these rules:

1. When comparing a number with a string, the string is converted to a number
2. When comparing with a boolean, `true` becomes 1 and `false` becomes 0
3. When comparing objects, they are only equal if they reference the same object

```javascript
// String to number conversion
console.log(5 > "3");      // true ("3" becomes 3, and 5 > 3)
console.log("10" > "9");   // false (string comparison is alphabetical, "1" comes before "9")
console.log("10" > 9);     // true ("10" becomes 10, and 10 > 9)

// Boolean conversions
console.log(true > false); // true (1 > 0)
console.log(false < true); // true (0 < 1)

// Object comparisons
let obj1 = {value: 5};
let obj2 = {value: 5};
let obj3 = obj1;
console.log(obj1 == obj2); // false (different objects)
console.log(obj1 === obj2); // false (different objects)
console.log(obj1 == obj3); // true (same object reference)
```

## Special Cases and Quirks

### null and undefined

```javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null == 0);          // false
console.log(null >= 0);          // true (null converts to 0 in numeric comparisons)
console.log(null <= 0);          // true (null converts to 0 in numeric comparisons)
```

### NaN Comparisons

`NaN` (Not a Number) is not equal to anything, including itself.

```javascript
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(NaN != NaN);   // true

// To check for NaN, use isNaN() or Number.isNaN()
console.log(isNaN(NaN));           // true
console.log(Number.isNaN(NaN));    // true
console.log(isNaN("string"));      // true (converts to NaN first)
console.log(Number.isNaN("string")); // false (more strict, checks if it's the NaN value)
```

## Array and Object Comparisons

Arrays and objects are compared by reference, not by their content.

```javascript
console.log([1, 2, 3] == [1, 2, 3]);   // false (different array references)
console.log({a: 1} == {a: 1});         // false (different object references)

// To compare array contents
console.log(JSON.stringify([1, 2, 3]) === JSON.stringify([1, 2, 3])); // true
```

## Logical Operators and Truthiness

JavaScript values can be evaluated for their "truthiness" or "falsiness":

### Falsy Values

The following values evaluate to `false` in boolean contexts:
- `false`
- `0` (zero)
- `''` or `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values

Everything else evaluates to `true`:
- `true`
- Any number other than 0
- Non-empty strings
- Arrays (even empty ones)
- Objects (even empty ones)
- Functions

```javascript
if ([]) console.log("Empty array is truthy");  // This will execute
if ({}) console.log("Empty object is truthy"); // This will execute
if ("0") console.log("String with '0' is truthy"); // This will execute
```

## Best Practices

1. **Use strict equality (`===`) by default** to avoid unexpected type coercion.

2. **For null/undefined checks**, you may use:
   ```javascript
   if (variable == null) { /* Will match both null and undefined */ }
   ```

3. **Be careful with object comparisons**. Compare their properties or use libraries like Lodash's `isEqual`.

4. **Understand type coercion** when using `==`, `!=`, `>`, `<`, `>=`, and `<=`.

5. **For NaN checks**, always use `Number.isNaN()` (preferred) or `isNaN()`.

## Learn More

For more information about JavaScript comparisons:

1. [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
2. [JavaScript.info: Comparisons](https://javascript.info/comparison)
3. [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
4. [W3Schools: JavaScript Comparisons](https://www.w3schools.com/js/js_comparisons.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)