// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:
        // let x = 10; // x is now a number
        // x = "Hello"; // x is now a string
        // x = true; // x is now a boolean

// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.


// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:
        // int x = 10; // x is a variable of type int
        // String name = "John"; // name is a variable of type String

// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


// *************************************


// Types of dataTypes
//     1. Primitive dataTypes
//     2. Non-Primitive dataTypes


// Primitive dataTypes (Call by Value)
    // -> String : Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

    // -> Number : Represents both integer and floating-point numbers. Example: 5, 3.14.

    // -> null : standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

    // -> Boolean : Represents a binary value, either true or false, often used for conditional logic.

    // -> undefined : Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

    // -> Symbol (ES6) : it is mostly used used to find uniqueness.
                // Eg: 
                      const id = Symbol('123')
                      const anotherId = Symbol('123')
                      console.log(id == anotherId)      // false
                      console.log(id === anotherId)     // false
                      // input is same i.e, '123' but due to Symbol datat type both will act like unique 

    // -> BigInt (ES11) : Represents large integers that cannot be represented by the Number type.


// Non-Primitive dataTypes (Call by reference)
    // -> Array : Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].
            const temp = [1,2,3,4]
            console.log(temp)   // [ 1, 2, 3, 4 ]

    // -> Object : Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.
            let myObj = {
               name : "Madhvendra Singh",
               age : 21
            }
            console.log(myObj)  // { name: 'Madhvendra Singh', age: 21 }

    // -> Function : Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.
            const myFunc = function add(x,y){
                return x+y;
            }
            console.log(myFunc(2,3))

    // Date : Represents dates and times.

    // RegExp : Represents regular expressions for pattern matching.



// Check for the dataType of a variable
            console.log(typeof(myFunc)) // function
            
            // typeof operator result
            // Primitive datatypes:
            // String - string
            // Number - number
            // Boolean - Boolean
            // Null - object(****)
            // Undefined - undefined
            // // BigInt - bigint
                    
            // Non-primitive datatypes:
            // Array - object
            // Function - function(object)
            // Object - object


