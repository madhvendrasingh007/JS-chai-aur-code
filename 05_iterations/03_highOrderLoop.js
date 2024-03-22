// For of loop

// array of string -> ["", "", ""]
// array of objects [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// in for of loop ->  for (const iterator of object) { }
// we use object in broader term which means yeh loop bass object pe nhi lagega instead yeh array pe bhi lag sakta hai

for (const i of arr) {
    // console.log(i)   // Print 1-5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)     // will print "Each car is (with each caracter of "Hello world" in separate line)"
}

// Maps -> key value pair, store only unique (no duplicates)
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// Object won't get iterate like this
// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
// }