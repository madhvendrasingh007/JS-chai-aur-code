const coding = ["js", "ruby", "java", "python", "cpp"]

const val = coding.forEach( (item) => {
    // console.log(item)   // -> js ruby java python cpp
    return item     // -> undefined
})

// console.log(val);   // -> undefined : forEach does not return anything so by normal flow we cant store forEach result in variable


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )
// OR
// const newNums = myNums.filter( (num) => num > 4 )
// in this we dont have to return beacuse return is used when we will open some scope i.e, {} then it is mandatory

console.log(newNums)    // -> [ 5, 6, 7, 8, 9, 10 ]
// by using filter we can store values of array in any other variable, else we cant store as defined earlier


// What if we want to store forEach result in the variable
const newNums2 =[]

myNums.forEach( (num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
// console.log(newNums2);  //  -> [ 5, 6, 7, 8, 9, 10 ]
// Now it can print each and every value



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
   return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);

