/*  In JavaScript, the this keyword refers to an object.
    -> In an object method, this refers to the object.
    -> Alone, this refers to the global object.
    -> In a function, this refers to the global object.
    -> In a function, in strict mode, this is undefined.
    -> In an event, this refers to the element that received the event.
    -> Methods like call(), apply(), and bind() can refer this to any object.
*/

const user = {
    username : "Madhav",
    price : 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`) 
        // here this refers the current context/variable
        
        // console.log(this)
        /*  output
            { username: 'Madhav', price: 999, welcomeMsg: [Function: welcomeMsg] }
            { username: 'Sam', price: 999, welcomeMsg: [Function: welcomeMsg] }
        */
    }

}

user.welcomeMsg()   //  -> Madhav, welcome to website
user.username = "Sam"
user.welcomeMsg()   //  -> Sam, welcome to website

console.log(this)   // -> {}
// refers empty object but in browser it will give window i.e, the global object 


// Here while running console.log(this) it will give some pre defined value after defining username and running with console.log(this.username) it will give undefined
// we cant use directly under the function earlier we used it in the object i.e, user in the starting of the code
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // ->UNDEFINED
// }
// chai()

// another way to declare function but the result will be same
// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);  // ->UNDEFINED
// }
// chai()


// *********** Arrow Func ***********
const chai =  () => {
    let username = "hitesh"
    console.log(this);  // ->UNDEFINED
}
// chai()

// ******* Basic Arrow function *******
// () => {} this is arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4)) // -> 7



// ******* Implicit return *******
// No need to provide {} if there is only one statement in the function
// const addTwo = (num1, num2) =>  num1 + num2


// if we are using {} then we have to use return keyword as used in above eg. => { return num1 + num2}

// else if we use () then no need for return i.e => ({username: "hitesh"})
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))   // -> 7



// If we want to return object
const addThree = () => ({username: "hitesh"})
console.log(addThree()) //  { username: 'hitesh' }

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()







/* Refer : 
1. https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e

2. hoisting - https://www.w3schools.com/js/js_hoisting.asp

3. strict mode - https://www.w3schools.com/js/js_strict.asp

4. this keyword - https://www.w3schools.com/js/js_this.asp

5. arrow function - https://www.w3schools.com/js/js_arrow_function.asp
*/