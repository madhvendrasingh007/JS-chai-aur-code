# JavaScript Object Destructuring and JSON

A guide to object destructuring and JSON format in JavaScript, with practical examples.

## Table of Contents
- [Object Destructuring](#object-destructuring)
- [JSON Format](#json-format)
- [JSON Examples](#json-examples)
- [Array of Objects](#array-of-objects)

## Object Destructuring

Object destructuring allows you to extract properties from objects and bind them to variables with a concise syntax.

### Basic Destructuring

```javascript
const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Madhav"
}

// Traditional way to access object properties
console.log(course.courseInstructor); // Madhav
```

### Destructuring with Renaming

You can rename variables during destructuring:

```javascript
// Destructuring with alias - courseInstructor becomes 'instr'
const {courseInstructor: instr} = course;
console.log(instr); // Madhav
```

### Multiple Properties

You can destructure multiple properties at once:

```javascript
const {coursename, price} = course;
console.log(coursename); // Javascript
console.log(price); // 999
```

## JSON Format

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write and easy for machines to parse and generate.

### JSON Structure

- Uses key-value pairs similar to JavaScript objects
- Keys must be strings with double quotes
- Values can be strings, numbers, objects, arrays, booleans, or null
- No functions, undefined, or comments allowed

### JSON Example

```json
{
    "name": "Madhvendra",
    "coursename": "Javascript",
    "price": "free"
}
```

## Array of Objects

JSON can contain arrays of objects:

```json
[
    {
        "name": "Madhvendra",
        "coursename": "Javascript",
        "price": "free"
    },
    {
        "name": "John",
        "coursename": "Python",
        "price": "1999"
    },
    {
        "name": "Sarah",
        "coursename": "React",
        "price": "2999"
    }
]
```

### Working with Arrays of Objects in JavaScript

```javascript
const courses = [
    {
        name: "JavaScript Course",
        instructor: "Madhav",
        price: 999
    },
    {
        name: "Python Course",
        instructor: "John",
        price: 1999
    }
];

// Accessing elements
console.log(courses[0].name); // JavaScript Course

// Using map to process all objects
const instructors = courses.map(course => course.instructor);
console.log(instructors); // ["Madhav", "John"]
```

## Common Operations with JSON

```javascript
// Converting JavaScript object to JSON string
const courseObj = {
    coursename: "Javascript",
    price: 999,
    instructor: "Madhav"
};
const jsonString = JSON.stringify(courseObj);
console.log(jsonString); 
// {"coursename":"Javascript","price":999,"instructor":"Madhav"}

// Converting JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.instructor); // Madhav
```


---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)