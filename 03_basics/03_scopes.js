// scope is something which is under limit of {}, looks similar to object declaration but at the time of defining if, function, etc these {} acts as scope

// global scope 
var c = 200

if(true){
    // block scope
    let a = 20
    const b = 30
    var c = 40
}

// console.log(a)   // error : using a out of scope
// console.log(b)   // error : using b out of scope

console.log(c)      // -> 40
// thats why there is problem with var ideally it shouldn't have print 40 
// infact if we assign a global variable even in that case also it will show the value of block scope



// ********* part-2 *********

// global scope
let d = 300

if(true){
    // block scope
    let d = 20
    console.log("Inner: " + d)  // -> Inner: 20
}
console.log(d)  // -> 300