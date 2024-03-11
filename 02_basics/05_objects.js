const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Madhav"
}

// Normal way to access object
// course.courseInstructor

const {courseInstructor : instr} = course
// courseInstructor is now instr like nickname
console.log(instr);


// JSON
// {
//      "name": "Madhvendra",
//      "coursename": "Javascript",
//      "price": "free"
// }

// Array of object
// [
//      {},
//      {},
//      {},
// ]