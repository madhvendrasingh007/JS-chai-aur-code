// Datatypes are based on memory allocation

// Primitive datatypes
    // -> Call by value (string,number,boolean,null,undefined,BigInt,symbol) 
    // -> Passed or assigned by value (call by value).
    // -> Stored in Stack memory
    // -> Changes to copies don't affect the original.

// Reference/Non primitive data types 
    // -> call by reference ( array,object, function) 
    // -> Stored in heap; accessed via references (stored in stack).
    // -> Changing the value through another reference affects the original.

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// Primitive data types -> stack memory
let name1 = "maddy"

let name2 = name1

name2 = "Madhvendra"

console.log(name1)  // -> maddy
console.log(name2)  // -> Madhvendra



// reference data types -> heap memory
let user1 = {
    name: "Ram",
    id: 1
}

let user2 = user1

user2.name = "Ramesh"
console.log(user2.name) // -> Ramesh
console.log(user1.name) // -> Ramesh
// if it was primitive data type then user1 would be Ram and user2 would be Ramesh


//       ________                    _______________
//      | user2  |  --------|       |               |
//       ________           |------>|               |
//      | user1  |  --------|       |               |
//       ________                   |               |
//      | name1  |                  |      name     |
//       ________                   |       id      |
//      | name2  |                  |               |
//       ________                   |               |
//      | name1  |                  |               |
//       --------                    ---------------

// for each changes primitive datatype will create new stack memory and change will happen on the copy but in the case of reference type changes will be done on the actual variable i.e, stored in the heap memory