// Singleton - when we create object using constructor
// Object.create

// Symbol defining
const mySym = Symbol("Key1")

// Object literals
const JsUser = {
     name: "Madhvendra", // key : value pair
     "Full Name": "Madhvendra Singh",   // cant access this with the 1st way 
     [mySym]: "myKey1", //symbol acting as key
     age: 23,
     location: "Jaipur",
     email: "madhav@google.com",
     isLoggedIn: false,
     lastLoginDays: ["Monday", "Saturday"]
}


// Accessing object

// 1st way (Not the best way to access an object)
console.log(JsUser.email)   // madhav@google.com

// 2nd way (cant access "full name")
// console.log(JsUser.full Name) and console.log(JsUser."full Name") cant access it as its wrong way to access an object
// the only way to access this is
console.log(JsUser["Full Name"])    // Madhvendra Singh

console.log(typeof JsUser.mySym)    // undefined
// as we can see that the type of mysym is string, so if we want it as symbol then make the variable as [mySym]
console.log(JsUser[mySym])  // myKey1


// change vale of an object
JsUser.email = "madhav1@google.com"
// if dont want to change value then we can freeze it
// Object.freeze(JsUser)
// JsUser.email = "shyam1@google.com"
console.log(JsUser.email);  // madhav1@google.com

// console.log(JsUser)


// Functions
// There might be an error if we use it with the freeze function
JsUser.greeting = function () {
    console.log("Hello JS user");   // Hello JS user
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


// console.log(JsUser.greeting);   Function is not executed but we got the reference of it
console.log(JsUser.greeting());


console.log(JsUser.greetingTwo());