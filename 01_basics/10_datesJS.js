let myDate = new Date()

console.log(myDate.toString())          //  Wed Feb 28 2024 10:05:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString())       //  2024-02-28T10:05:12.711Z
console.log(myDate.toDateString())      //  Wed Feb 28 2024
console.log(myDate.toLocaleString())    //  2/28/2024, 10:05:12 AM

console.log(typeof(myDate))     //  object

let myCreatedDate = new Date(2023, 0, 23)   //  (yy,mm,date)
console.log(myCreatedDate.toString());  //  Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)    //  (yy,mm,date,hr,min)
console.log(myCreatedDate2.toString()); //  Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate3 = new Date("2023-01-27")
// console.log(myCreatedDate3.toString()); //  Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate4.toString()); //  Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

// ******** TIMESTAMP ********

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //  1709115652885
console.log(myCreatedDate.getTime());   //  1674432000000

console.log(Math.floor(Date.now()/1000));   //  1709116706

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month start with 0 i.e we added 1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    month: "long"
    // press ctrl + space in vs code
})

