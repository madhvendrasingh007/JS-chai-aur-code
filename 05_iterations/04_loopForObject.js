// For-in loop is used to iterate object


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

// *********** FOR IN LOOP ***********
// first we try to to print the keys
for (const key in myObject) {
    console.log(`Keys are: ${key}`)
}

// first we try to to print the objects
for (const key in myObject) {
    console.log(`Objects are: ${myObject[key]}`)
}


// does for-in loop works for array
const myArray = ["js", "rb", "py", "java", "cpp"]
for (const key in myArray) {
    console.log(myArray[key]);    
}
// If we print keys here using for-in loop then it will print 0, 1, 2, 3, 4 but in for-of loop it waws directly printed the values of the array


// Can we iterate map using for-in loop 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// Map is non-iterable in normal scenario, so it won't give any result