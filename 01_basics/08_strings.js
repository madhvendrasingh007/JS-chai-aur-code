const name = "Madhvendra Singh"
const age = 23

// Normal way to concatenate string
// console.log(name + " " +age)

// best way to concatenate string i.e, string interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`)

// another way to declare string
const newName = new String('Madhav')
console.log(newName)
console.log(typeof(newName))
// console.log(newName[0])
// console.log(newName[1])
// console.log(newName.__proto__);

//  console.log(newName.length);
//  console.log(newName.toUpperCase());
//  console.log(newName.charAt(2));
//  console.log(newName.indexOf('h'));
 console.log(newName.substring(0,4));
//  substring cant take negative value like slice
 console.log(newName.slice(0,4));
 console.log(newName.slice(-5,5));


const name1 = "   Md   "
console.log(name1);
console.log(name1.trim());  // remove empty spaces from both start and end
// but to remove particular spaces we have a choice of trimStart(), trimEnd() and works only on whitespaces and line terminators

const url = "https://helloWorld/madhav%20singh"
console.log(url.replace('%20','-'))

const sp = "Madhvendra Singh 20"
console.log(sp.split(' '))

const sp2 = "Hello-world"
console.log(sp2.split('-'))