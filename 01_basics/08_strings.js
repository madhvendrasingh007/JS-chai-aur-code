const name = "Madhvendra Singh"
const age = 23

// Normal way to concatenate string
// console.log(name + " " +age)    // Madhvendra Singh 23

// best way to concatenate string i.e, string interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`) // Hello my name is Madhvendra Singh and my age is 23

// another way to declare string
const newName = new String('Madhav')    // provide more functionality
console.log(newName)    // [String: 'Madhav']
console.log(typeof(newName))    // object
// console.log(newName[0])  // M
// console.log(newName[1])  // a
// console.log(newName.__proto__)  // {}

 console.log(newName.length);   // 6
 console.log(newName.toUpperCase());    // MADHAV
 console.log(newName.charAt(2));    // d
 console.log(newName.indexOf('h')); // 3
 console.log(newName.substring(0,4));   // Madh
//  substring cant take negative value like slice
 console.log(newName.slice(0,4));   // Madh
 console.log(newName.slice(-5,5));  // adha


const name1 = "   Md   "
console.log(name1); // "   Md    "   
console.log(name1.trim());  // remove empty spaces from both start and end -> "Md"
// but to remove particular spaces we have a choice of trimStart(), trimEnd() and works only on whitespaces and line terminators

const url = "https://helloWorld/madhav%20singh"
console.log(url.replace('%20','-')) // https://helloWorld/madhav-singh

const sp = "Madhvendra Singh 20"
console.log(sp.split(' '))  // [ 'Madhvendra', 'Singh', '20' ]

const sp2 = "Hello-world"
console.log(sp2.split('-')) // [ 'Hello', 'world' ]