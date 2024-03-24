const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// wanted to print num+10 for each value
// const newNums = myNumers.map( (num) => num+10 )
// OR
const newNums = myNumers.map( (nums) => {return nums + 10} )


// console.log(newNums);   // ->  [  11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// Chaining newnums = myNumbers.map().map().filter()
const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums2);  // -> [ 41, 51,  61, 71, 81, 91, 101]