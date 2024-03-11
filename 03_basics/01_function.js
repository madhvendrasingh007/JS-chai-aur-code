function sayMyName(){
    console.log("M")
    console.log("A")
    console.log("D")
    console.log("H")
    console.log("A")
    console.log("V")
}
// sayMyName -> reference, sayMyName() -> execute
sayMyName()

// function definition
function add(num1, num2){   // num1,num2 are parameter
    console.log(num1+num2)  
}
// function call
add(3,4)    // 3,4 are variable -> 7

// ************ IMP ************
const sum = add(4,5)    // -> 9
// console doesn't mean that it will return value instead its just printing that, we have to use return type to return any value
// console.log("Result is: " + sum)    // -> Result is: undefined

function add2(num4, num5){   
    let sum2 = num4+num5;
    return sum2
    // console.log("End") won't print after return
}
const sum2 = add2(10,10)
// console.log("Result is: " + sum2)   // -> Result is: 20


function add3(num6, num7){   
    return num6+num7;
}
// console.log("Result is: " + add3(1,1))   // ->Result is: 2

function loginUserMsg(username){
    if(!username){  //  !username = username == undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Madhvendra"))
console.log(loginUserMsg())
