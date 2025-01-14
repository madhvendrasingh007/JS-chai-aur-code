JavaScript Variables can be declared in 4 ways: 
    1. Automatically     
    2. Using var    
    3. Using let    
    4. Using const



-> The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.



### When to Use var, let, or const?
    
    1. Always declare type of variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.



### MORE about let
The let keyword was introduced in ES6 (2015)

    1.  Variables declared with let have Block Scope
    2.  Variables declared with let must be Declared before use
    3.  Variables declared with let cannot be Redeclared in the same scope

## Difference between var & let

In JavaScript, both let and var are used to declare variables, but they have some important differences:

### 1. Scope

var: Has function scope or global scope. This means that if a variable is declared with var inside a function, it is accessible anywhere within that function, even if it's referenced before the declaration (due to hoisting). If declared outside any function, it becomes a global variable.

let: Has block scope, which means the variable is only accessible within the block (e.g., loops, conditionals) where it is defined.

```js
if (true) {
  var x = 10;  // Accessible outside the block
  let y = 20;  // Only accessible inside the block
}
console.log(x);  // 10
console.log(y);  // ReferenceError: y is not defined
```

### 2. Hoisting
var: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can reference them before they are declared, but they will have the value undefined until the declaration line is executed.

let: Variables declared with let are also hoisted, but are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. This means accessing the variable before its declaration results in a ReferenceError.

```js
console.log(a);  // undefined (due to hoisting with var)
var a = 5;

console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```


### 3. Re-declaration
var: Allows you to re-declare a variable within the same scope without throwing an error.

let: Does not allow re-declaration in the same scope. If you try to declare the same variable twice, it will throw a SyntaxError.

```js
var z = 30;
var z = 40;  // No error

let w = 50;
let w = 60;  // SyntaxError: Identifier 'w' has already been declared
```

4. Global Object Property
var: When declared in the global scope, a variable created with var becomes a property of the global object (i.e., window in browsers).

let: Variables declared with let at the global level do not become properties of the global object.

```js
var v = 100;
console.log(window.v);  // 100

let w = 200;
console.log(window.w);  // undefined
```


# Summary:
```
Use let when you want block-level scoping, avoid re-declaration issues, and prevent accidental global object properties.

Use var for function-level scoping (although let is generally recommended over var in modern JavaScript).
```
