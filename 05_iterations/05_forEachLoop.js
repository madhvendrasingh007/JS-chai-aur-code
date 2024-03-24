const coding = ["js", "ruby", "java", "python", "cpp"]

// Here we have to define function in the loop  i.e function greet() but forEach method is callback so it won't have the function name, So, codin.forEach( function (item) { }) and here item may be value, val, item or anything as it is not fixed.


coding.forEach( function (item) {
    // console.log(item);  // -> js ruby java python cpp
})


// we can use arrow function also 
coding.forEach( (item) => {
    // console.log(item);  // -> js ruby java python cpp
} )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);   // -> js ruby java python cpp
} )


// Objects in array and how to iterate them
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )