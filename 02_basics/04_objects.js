// Singleton object
// const tinderUser1 = new Object()
// console.log(tinderUser1)

// Non-Singleton object
const tinderUser ={}
tinderUser.id = "123"
tinderUser.name = "Madhav"
tinderUser.isLoggedIn = false
console.log(tinderUser)

// Nested User
const regularUser = {
    email: "madhav@google.com",
    fullname: {
        userfullname: {
            firstname: "Madhvendra",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname)
console.log(regularUser.fullname.firstname)

// If the fullname doesn't exist then we can put ? at the end of fullname so that if it doesnt exist then it can ignore it and wont show any issue
// console.log(regularUser.fullname?.firstname)


// combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);
// Here obj1 and obj2 will act as separate object but wont get combined

// const obj4 = Object.assign(obj1, obj2)
// another and correct way to assign is
const obj4 = Object.assign({}, obj1, obj2)
// will give same result but normally Object.assign(target, source), so {} will act as target and obj1 and obj2 will act as source object

// or we can do is which is the best way i.e, spread operator
const obj5 = {...obj1, ...obj2}

console.log(obj4);
console.log(obj5);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// If value doesnt exist
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));