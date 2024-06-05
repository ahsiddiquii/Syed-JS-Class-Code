// var name = " Abdul Haseeb Siddiqui";
// let address = "Fb Area";
// const city = "London";
// age = 20;
// let accountState;

// console.table([name, address, city]);

// Scopes
{
    // var a = 10;
    // console.log(a);
}
// console.log(a);
{
    // let f = 10;
    // console.log(f);
}
// console.log(f);

// console.log(typeof(address));

// Data Type Conversion:

// let age = "22";
// console.log(typeof age);

// let ageInNumber = Number(age);
// console.log(typeof ageInNumber)

// Number conversion confusion.
// let a = "34re";
// console.log(a);
// console.log(typeof a)
// let b = Number(a);
// console.log(typeof b)
// console.log(b)

// null

// let c = null;
// console.log(c);
// console.log(typeof c);
// null means empty but "" doesn't means it's null it's empty string.
// let emptyString = "";
// console.log(emptyString);

// undefined

// let d;
// console.log(d);
// console.log(typeof d);


// let a = 33;
// let negVal = -a;
// console.log(negVal);


// let a = 30;
// let b = a+3;
// console.log(a);
// console.log(b);

// Symbol data type:

// const a = Symbol('123');
// const b = Symbol('123');
// console.log(a === b);

// BigInt Data Type:
// const bigNum = 353535353253535345353453544n;
// console.log(typeof bigNum)

// let obj_One = {
//     name : "Abdul Haseeb Siddiqui",
//     age : 22
// };

// let obj_Two = {...obj_One}

// obj_Two.age = 21;

// console.log(obj_One)
// console.log(obj_Two)

// console.log("Here I am a developer");


// -------------------------------------------------------

// Variable Naming Methods:
// var name = "Ali";
// let brotherName = "Wasi";
// const age = 22;
// var bother_Name = "ffsfd";

// Creating and Assigning Variable:

// let name;
// name = "Abdul Haseeb Siddiqui";

// Differences between var, let & const:
// {  
//     var a = 10;
//     console.log("first ",a);
//   }
// console.log("Second a", a);

// {
// let b = 34;
// console.log("First b", b)
// }
// // console.log("Second a", b)


// function sum (){

// } 

// var d = 335354;
// let n = 32;
// console.log(n)
// n = 45
// console.log(n);


// console.log(a);
// var a;

// console.log(z);
// let z;


// Data Types: 
// 1 Premitiveds & Non Premitives / Reference Data Types.

// Premitive 
// - String
// - Numbers
// - booleans
// - null 
// - undefined
// - Symbol
// - bigInt


// let name = "Ali$6{%@$"
// let secondName = 'Ali';
// console.log(typeof secondName);

// let age = 5.25;
// console.log(typeof age);

// let isMarried = false;
// console.log(typeof isMarried)
// let isGreaterThanTwenty = true;

// let address;
// console.log(typeof address);

// let nullValue = null;
// console.log(nullValue);
// console.log(typeof nullValue);

// let epmtyVariable = "";
// console.log(epmtyVariable)
// console.log(typeof epmtyVariable);

// let bigNumber = 535759737357357754787357239n;
// console.log(typeof bigNumber);


// String Practice Program :
// let url = "http://res.cloudinary.com/dnpv5wew4/image/upload/v1715259721/cbpb41pwab39351qjb7r.png";

// cbpb41pwab39351qjb7r

// STEP # 1
// let splt = url.split("/");
// ANSWER 
// [
//     'http:',
//     '',
//     'res.cloudinary.com',
//     'dnpv5wew4',
//     'image',
//     'upload',
//     'v1715259721',
//     'cbpb41pwab39351qjb7r.png'
// ]

// STEP # 2
// let slc = splt.slice(-1)[0];
// ANSWER 
// cbpb41pwab39351qjb7r.png

// STEP # 3
// let splt_2 = slc.split(".");
// ANSWER 
// ['cbpb41pwab39351qjb7r', 'png']

// STEP # 4 
// let finalURL = splt_2[0];
// ANSWER 
// cbpb41pwab39351qjb7r

// ALL ABOVE IN ONE LINE 
// let finalURL_2 = url.split("/").slice(-1)[0].split(".")[0];
// ANSWER 
// cbpb41pwab39351qjb7r

// -------------------------------------------------------


// Replace String:

// let second_URL = "https://facebook.com/abdul@20haseeb";

// let replacedString = second_URL.replace("@20", "-");
// console.log(replacedString);


// -------------------------------------------------------

// const num = 2
// console.log(num.toString())

// const num_2 = 432.234234;
// console.log(num_2.toFixed(2))

// const num_3 = 1000000;
// console.log(num_3.toLocaleString("en-IN"))

// -------------------------------------------------------

// Practice:

// const minRange = 10;
// const maxRange = 20;

// const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

// console.log(randomNumber);



// -----------------------------------------------------------

// Dates
// let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// To declare specific date 
// Note: Months start with 0 in JS 
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 55)
                            //   yy, ,mm, dd
// let myCreatedDate = new Date("2023-01-01")
                        //   mm, ,dd, yy
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate);

// `${newDate.getDay()} and the time `

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }))
// console.log(newDate.toLocaleString())

// ++++++++++

// EXPLATION: 

// Section 1: Creating a Date Object

// let myDate = new Date(): Creates a new Date object representing the current date and time.
// console.log(myDate.toString()): Logs the date in a string format, e.g., "Tue Feb 14 2023 14:30:00 GMT-0500 (Eastern Standard Time)".
// console.log(myDate.toDateString()): Logs the date in a shorter string format, e.g., "Tue Feb 14 2023".
// console.log(myDate.toLocaleString()): Logs the date in a localized string format, e.g., "2/14/2023, 2:30:00 PM".
// console.log(typeof myDate): Logs the type of the myDate variable, which is "object".

// Section 2: Creating a Specific Date

// The code shows different ways to create a Date object with a specific date and time:
// let myCreatedDate = new Date(2023, 0, 23): Creates a date object with the year 2023, month 0 (January), and day 23.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3): Creates a date object with the year 2023, month 0 (January), day 23, hour 5, minute 3, and seconds 0.
// let myCreatedDate = new Date("2023-01-14"): Creates a date object from a string in the format "yyyy-mm-dd".
// let myCreatedDate = new Date("01-14-2023"): Creates a date object from a string in the format "mm-dd-yyyy".
// console.log(myCreatedDate.toLocaleString()): Logs the created date in a localized string format.


// Section 3: Working with a Date Object

// let newDate = new Date(): Creates a new Date object representing the current date and time.
// console.log(newDate): Logs the date object.
// console.log(newDate.getMonth() + 1): Logs the month of the date as a number (1-12), since getMonth() returns a value between 0 and 11.
// console.log(newDate.getDay()): Logs the day of the week as a number (0-6), where 0 represents Sunday.

// Section 4: Formatting a Date
// Creates a string with the day of the week and the time.
// console.log(newDate.toLocaleString('default', { weekday: "long" })): Logs the date in a localized string format with the weekday name in long format (e.g., "Tuesday").


