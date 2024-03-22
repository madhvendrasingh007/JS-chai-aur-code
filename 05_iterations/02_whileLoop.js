let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i ++;
}


// While loop
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// Do While loop
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// even though score is 11 and condition is score<=10 but it will print 11 as do-while loop prints statement atleast once and after thet it checks the condition.