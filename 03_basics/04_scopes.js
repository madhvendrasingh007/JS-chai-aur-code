// Closure function / nested function
function one(){
    const username = "madhvendra"

    function two(){
        const website = "youtube"   //in simple word child can ask father for the variable i.e two can access variable -> username
        console.log(username)
    }
    // console.log(website)    //   -> error    in simple word father can't ask child for the variable i.e one can't access variable -> website
    // it will have error in above line and when JS find an error then it will won't proceed further

    two()
}

one()   


// ************* Interesting *************
// ************* 2 way to declare function *************
// here addone and addtwo both ways are used to define funtion but in addTwo it is known as expression


console.log(addone(5))  // -> 6
function addone(num){
    return num+1
}



// addTwo(5)    //  it will show error because now addTwo is not a function anymore instead it's expression now
const addTwo = function(num){
    return num+2
}
