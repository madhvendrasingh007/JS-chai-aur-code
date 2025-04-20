# JavaScript Closures and Function Declarations

A guide to closures, lexical scoping, and function declaration patterns in JavaScript.

## Table of Contents
- [Closures](#closures)
  - [What is a Closure?](#what-is-a-closure)
  - [Nested Functions](#nested-functions)
  - [Lexical Scoping](#lexical-scoping)
  - [Practical Uses](#practical-uses)
- [Function Declarations](#function-declarations)
  - [Function Declaration](#function-declaration)
  - [Function Expression](#function-expression)
  - [Key Differences](#key-differences)
- [Resources for Learning](#resources-for-learning)

## Closures

### What is a Closure?

A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures remember the environment in which they were created.

### Nested Functions

When functions are nested, the inner function has access to variables declared in its own scope as well as variables declared in the outer function's scope.

```javascript
function one() {
    const username = "madhvendra singh";

    function two() {
        const website = "youtube";
        // Inner function can access outer function's variables
        console.log(username);  // "madhvendra singh"
    }
    
    // Outer function cannot access inner function's variables
    // console.log(website);  // ReferenceError: website is not defined
    
    two();
}

one();
```

### Lexical Scoping

JavaScript uses lexical (static) scoping, which means the scope of a variable is determined by its location within the source code.

```javascript
function createGreeting(greeting) {
    // The returned function forms a closure, remembering 'greeting'
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Madhav"));  // "Hello, Madhav!"
```

### Practical Uses

Closures are commonly used for:
- Data privacy (creating private variables)
- Event handlers
- Callback functions
- Factory functions
- Memoization

## Function Declarations

JavaScript provides different ways to declare functions, each with its own characteristics.

### Function Declaration

Function declarations are hoisted, meaning they can be called before they are defined in the code.

```javascript
console.log(addone(5));  // 6 (works before declaration)

function addone(num) {
    return num + 1;
}
```

### Function Expression

Function expressions assign a function to a variable. They are not hoisted, so they cannot be used before they are defined.

```javascript
// addTwo(5);  // Error: addTwo is not a function

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));  // 7 (works after declaration)
```

### Key Differences

| Feature | Function Declaration | Function Expression |
|---------|---------------------|---------------------|
| Hoisting | Yes - can be called before defined | No - must be defined before called |
| Syntax | `function name() {}` | `const name = function() {}` |
| Named functions | Always named | Can be anonymous |
| Use cases | General purpose functions | Callbacks, IIFE, assignments |

## Resources for Learning

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Variable Scope, Closure](https://javascript.info/closure)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)
- [Eloquent JavaScript: Functions](https://eloquentjavascript.net/03_functions.html)
- [JavaScript: The Definitive Guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/)
- [FreeCodeCamp: JavaScript Closures](https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/)


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)