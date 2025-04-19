# JavaScript Operations

A comprehensive guide to JavaScript operations and type coercion during operations.

## Basic Operations

JavaScript supports common arithmetic operations:

```javascript
// Basic arithmetic
console.log(2 + 2);    // 4 (Addition)
console.log(2 - 2);    // 0 (Subtraction)
console.log(2 * 2);    // 4 (Multiplication)
console.log(2 / 2);    // 1 (Division)
console.log(2 % 2);    // 0 (Modulus - remainder after division)
console.log(2 ** 3);   // 8 (Exponentiation - 2 raised to power 3)

// Unary operators
let value = 3;
let negValue = -value;
console.log(negValue);  // -3 (Negation)
```

## String Concatenation

When the `+` operator is used with strings, it performs concatenation:

```javascript
let str1 = "Madhvendra";
let str2 = " Singh";
console.log(str1 + str2);  // "Madhvendra Singh"
```

## Type Coercion in Operations

JavaScript performs automatic type conversion (coercion) during operations, which can lead to interesting results:

### String and Number Operations

```javascript
// String + String = String concatenation
console.log("3" + "3");     // "33"

// String + Number = String concatenation (Number is converted to String)
console.log("1" + 2);       // "12"
console.log(1 + "2");       // "12"

// Operation order matters
console.log("1" + 2 + 2);   // "122" (left to right: "1"+2="12", then "12"+2="122")
console.log(1 + 2 + "2");   // "32" (left to right: 1+2=3, then 3+"2"="32")

// With other operators, Strings are typically converted to Numbers
console.log(1 - "2");       // -1 (String "2" is converted to Number 2)
console.log("1" - 2);       // -1 (String "1" is converted to Number 1)
console.log("5" * "2");     // 10 (Both strings are converted to numbers)

// Unary plus operator converts strings to numbers
console.log(3 + + "3");     // 6 (Unary + converts "3" to 3, then 3+3=6)

// Mixed operations can be confusing
console.log("3" + "3" - "3"); // 30 ("3"+"3"="33", then "33"-"3"=30)
```

### Operations with null, undefined, and NaN

```javascript
// null in operations
console.log(5 + null);      // 5 (null is converted to 0)
console.log("5" + null);    // "5null" (null is converted to "null")

// Operations with undefined
console.log(5 + undefined); // NaN (undefined becomes NaN in numeric operations)
console.log("5" + undefined); // "5undefined" (undefined becomes "undefined" in string operations)

// NaN propagates
console.log(5 + NaN);       // NaN
console.log(5 * NaN);       // NaN
```

## Coercion Rules in Operations

| Operation | Rule |
|-----------|------|
| `+` | If either operand is a string, performs concatenation after converting the other to string |
| `-`, `*`, `/`, `%` | Converts operands to numbers before operation |
| Unary `+` | Converts operand to number |
| Unary `-` | Converts operand to number and negates it |

## Type Coercion Summary

1. The `+` operator:
   - With two numbers: performs addition
   - With at least one string: performs concatenation
   - With null: converts null to 0 for numbers, "null" for strings
   - With undefined: results in NaN for numbers, "undefined" for strings

2. The `-`, `*`, `/`, `%` operators:
   - Always attempt to convert operands to numbers
   - With strings containing valid numbers: converts to numbers
   - With null: converts to 0
   - With undefined: results in NaN

3. JavaScript operations follow left-to-right evaluation:
   - `"1" + 2 + 2` evaluates as `("1" + 2) + 2` → `"12" + 2` → `"122"`
   - `1 + 2 + "2"` evaluates as `(1 + 2) + "2"` → `3 + "2"` → `"32"`

## Common Pitfalls and Tips

1. **Be cautious with the `+` operator** when mixing strings and numbers, as it's the only arithmetic operator that can perform string concatenation.

2. **Use explicit conversion** when needed to avoid unexpected type coercion:
   ```javascript
   let num = Number("5");  // Explicitly convert to number
   let str = String(5);    // Explicitly convert to string
   ```

3. **Use parentheses** to make operation order explicit:
   ```javascript
   let result = (1 + 2) + "3";  // Clearer intention: 3 + "3" = "33"
   ```

4. **Consider using template literals** for string concatenation to improve readability:
   ```javascript
   let firstName = "Madhvendra";
   let lastName = "Singh";
   console.log(`${firstName} ${lastName}`);  // "Madhvendra Singh"
   ```

## Learn More

For more information about JavaScript operations and type coercion:

1. [MDN Web Docs: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
2. [JavaScript.info: Operators](https://javascript.info/operators)
3. [W3Schools: JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
4. [JavaScript Equality and Comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)