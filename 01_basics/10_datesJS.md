# JavaScript Date Object Guide

A comprehensive reference for working with Date objects in JavaScript with practical examples.

## Basic Date Creation

```javascript
// Creating a Date object for the current date and time
let myDate = new Date();
console.log(myDate.toString());         // Wed Feb 28 2024 10:05:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());      // 2024-02-28T10:05:12.711Z
console.log(myDate.toDateString());     // Wed Feb 28 2024
console.log(myDate.toLocaleString());   // 2/28/2024, 10:05:12 AM

// Checking the type of Date objects
console.log(typeof(myDate));            // object
```

## Creating Specific Dates

```javascript
// Creating a Date with year, month, day
// Note: Month is 0-indexed (0 = January, 11 = December)
let myCreatedDate = new Date(2023, 0, 23);   // (year, month, day)
console.log(myCreatedDate.toString());       // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// Creating a Date with year, month, day, hours, minutes
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);  // (year, month, day, hours, minutes)
console.log(myCreatedDate2.toString());            // Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

// Creating dates from strings
let myCreatedDate3 = new Date("2023-01-27");       // ISO format (YYYY-MM-DD)
console.log(myCreatedDate3.toString());            // Fri Jan 27 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDate4 = new Date("01-14-2023");       // MM-DD-YYYY format
console.log(myCreatedDate4.toString());            // Sat Jan 14 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```

## Working with Timestamps

```javascript
// Getting current timestamp (milliseconds since January 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp);                          // 1709115652885

// Getting timestamp from a specific date
console.log(myCreatedDate.getTime());              // 1674432000000

// Converting timestamp to seconds (from milliseconds)
console.log(Math.floor(Date.now()/1000));          // 1709116706
```

## Date Properties and Methods

```javascript
let newDate = new Date();

// Getting components of a date
console.log(newDate.getFullYear());                // Current year (e.g., 2024)
console.log(newDate.getMonth() + 1);               // Current month (note: +1 because months are 0-indexed)
console.log(newDate.getDate());                    // Current day of month (1-31)
console.log(newDate.getDay());                     // Current day of week (0-6, where 0 is Sunday)
console.log(newDate.getHours());                   // Current hour (0-23)
console.log(newDate.getMinutes());                 // Current minutes (0-59)
console.log(newDate.getSeconds());                 // Current seconds (0-59)
console.log(newDate.getMilliseconds());            // Current milliseconds (0-999)
```

## Date Formatting

```javascript
let formattedDate = new Date();

// String template literals with date components
console.log(`Today is day ${formattedDate.getDay()} of the week`);

// Locale-specific formatting
console.log(formattedDate.toLocaleString());                           // 2/28/2024, 10:05:12 AM
console.log(formattedDate.toLocaleDateString());                       // 2/28/2024
console.log(formattedDate.toLocaleTimeString());                       // 10:05:12 AM

// Customized locale formatting
const options = {
    weekday: "long",      // "long" (Monday), "short" (Mon), "narrow" (M)
    year: "numeric",      // "numeric" (2024), "2-digit" (24)
    month: "long",        // "long" (January), "short" (Jan), "narrow" (J), "numeric" (1), "2-digit" (01)
    day: "numeric",       // "numeric" (1), "2-digit" (01)
    hour: "numeric",      // "numeric" (1), "2-digit" (01)
    minute: "2-digit",    // "numeric" (1), "2-digit" (01)
    second: "2-digit",    // "numeric" (1), "2-digit" (01)
    timeZoneName: "short" // "short" (GMT+1), "long" (British Summer Time)
};

console.log(formattedDate.toLocaleString('en-US', options));          // Monday, February 28, 2024 at 10:05:12 AM GMT
console.log(formattedDate.toLocaleString('hi-IN', options));          // सोमवार, 28 फ़रवरी, 2024 10:05:12 पूर्वाह्न GMT
```

## Date Manipulation

```javascript
let manipulationDate = new Date();

// Setting components
manipulationDate.setFullYear(2025);                // Set year to 2025
manipulationDate.setMonth(6);                      // Set month to July (0-11)
manipulationDate.setDate(15);                      // Set day to 15th of month
manipulationDate.setHours(10);                     // Set hours to 10 AM
console.log(manipulationDate.toString());          // Wed Jul 15 2025 10:xx:xx

// Date arithmetic
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);          // Add one day
console.log(tomorrow.toDateString());              // Next day's date

let nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);          // Add 7 days
console.log(nextWeek.toDateString());              // Date one week from now

// Calculate time difference in days
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-01-10');
const diffTime = Math.abs(date2 - date1);          // Difference in milliseconds
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(`Difference: ${diffDays} days`);       // Difference: 9 days
```

## Common Date Operations

```javascript
// Check if a date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

console.log(isValidDate(new Date()));              // true
console.log(isValidDate(new Date('invalid')));     // false

// Format date in YYYY-MM-DD format
function formatYMD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

console.log(formatYMD(new Date()));                // e.g., "2024-02-28"

// Get first day of current month
function getFirstDayOfMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

console.log(getFirstDayOfMonth().toDateString());  // e.g., "Thu Feb 01 2024"

// Get last day of current month
function getLastDayOfMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

console.log(getLastDayOfMonth().toDateString());   // e.g., "Thu Feb 29 2024"
```

## Important Notes

- Months in JavaScript Date objects are **0-indexed** (January is 0, December is 11)
- Days of the week are **0-indexed** (Sunday is 0, Saturday is 6)
- The Date object always includes time, defaulting to 00:00:00 if not specified
- Date objects store dates as milliseconds since January 1, 1970, 00:00:00 UTC (Unix Epoch)
- Be aware of timezone differences when working with dates

## Browser Compatibility

Most Date methods are supported across all modern browsers. However, for consistent date handling in applications, consider using libraries like:

- [Date-fns](https://date-fns.org/)
- [Luxon](https://moment.github.io/luxon/)
- [Day.js](https://day.js.org/)

---

© 2025 | [GitHub](https://github.com/username) | Made with ❤️ by JavaScript Enthusiasts