// console.log("Hello World!");

// // Non Premitives / Reference Data Types.
// // 1  Array
// // 2  Object 
// // 3 Function

// let string = "Ali";

// let userName = "      Abdulhaseeb33454        ";
// let lowerCaseUSername = userName.trim();
// // let secondStr = string.toLowerCase();
// let secondStr = string;
// console.log(secondStr);
// console.log(string);



















// let array_1 = [1, 2, 3, 4, 5];
// // console.log(array_1[2]);
// let array_2 = array_1[3] = 7;
// console.log(array_1);
// // let array_2 = [1,"Ali",3,false, null, undefined];

// // 2 Object

// let object_1 = {
//     name: "Ali",
//     age: 20,
//     isMarried: false,
//     fruits: ["Apples", "mango", "Orange", "Banana"],
//     address: {
//         street: 31231,
//         postalCode: 75950,
//         City: "Karachi",
//     }
// };


// console.log(object_1.address.street);


// let arrayOfObjects = [
//     {
//         name: "Syed",
//         age: 23,
//         city: "Karachi"
//     },
//     {
//         name: "ALi",
//         age: 23,
//         city: "Karachi"
//     },
//     {
//         name: "Hussain",
//         age: 23,
//         city: "Karachi"
//     },
// ];

// arrayOfObjects[1].name = "Amir";
// console.log(arrayOfObjects[1]);



// let address = "UK Square Karachi";
// console.log(typeof address);
// let age = 44;
// let isMarried = false;

// let sum = 7 + 7;
// console.log(sum);

// String Concatenation:

// let firstName = "Syed";
// let secondName = "Ali";

// let fullName_1 = "My name is " + firstName + lastName;
// console.log(fullName);

// String Interpolation / Template literalls / Template Strings.

// let firstName = "Syed";
// let lastName = "Ali";

// let fullName = `My full name is ${firstName} ${lastName}`;
// console.log(fullName);


// -----------------------------------------------------------


// Strings Functions / Methods 

// 1- length

// let myName = "ABDUL HASEEB SIDDIQUI"; // type string
// console.log(myName.slice(4, 19));


// Replace String:

// let Fb_URL = "https://facebook.com/abdul@20haseeb";

// let replacedString = Fb_URL.replace("@20", "-");
// console.log(replacedString);


// Includes:

// let name = "I am a full stack developer";

// console.log(name.includes("a"));

// SPlit:
// let Fb_URL = "https://facebook.com/abdul@20haseeb";

// let responseOfSplit = Fb_URL.split("/");
// console.log(responseOfSplit);
// [ 'https:', '', 'facebook.com', 'abdul@20haseeb' ]
// let facebookValue = responseOfSplit[2]; // facebook.com 
// console.log(facebookValue.split('.'));

// Numbers:
// let sum =  4 + 5 ;
// const sum = 4 - 10; 
// console.log(sum);

// let num_1 = 4;
// // console.log(typeof num_1);
// let changeType = num_1.toString();
// console.log(typeof changeType);

// let amount = 350000;
// console.log(amount.toLocaleString('en-GB'));
// console.log(amount.toLocaleString('ko-KR'));

// ------------------------------------------------

// Math 

// console.log(Math.PI);

let num = 342.8643543;

// console.log(Math.floor(num));

// console.log(Math.max(2.3,5,7,1,0,9));

// console.log(Math.random());

// Practice:

// const minRange = 10;
// const maxRange = 20;

// const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10 ;

// console.log(randomNumber);

// console.log(Math.trunc(13.90))
// console.log(Math.abs(-20)) ;



// Non premitives 
// array
// objects
// function 


// let name = "Ali"; // Premitives
// let boolean = false; // Premetives 

// Ali
// let capitalizeName = name.toUpperCase();

// console.log(name);
// console.log(capitalizeName);



// let ali = [1,2,3,4,5,6,7,8];
//          [1,2,3,4,5,6,7,8]
// let change = ali[6] = 9

// console.log(ali);
// console.log(change);

// const myArr = [0, 1, 2, 6, 4, 5];
// console.log(myArr.includes(9));

// console.log(myArr.includes(0)) 

// console.log(myArr.indexOf(6));



// ---------------------------------------------

// EXAMPLE: 1
// const array = ["apples", "pears", "plums", "oranges"];
// console.log(array.indexOf("pears"));
// OUTPUT: 1


// EXAMPLE: 2
// let array_1 = ["Shayan", "Shazan", "Rafey", "Ahmed"];
// let array_2 = array_1.indexOf("Rafey");
// console.log(array_2);
// OUTPUT: 2
// console.log(typeof (array_2));
// OUTPUT: number


// EXAMPLE: 3
// let array_3 = [0, 1, 2, 3, 4, 5, 2, 7, 8,];
// let array_4 = array_3.indexOf(2, 5); // Find value 2 from index number 2
// console.log(array_4);
// OUTPUT: 2
// let array_5 = array_3.indexOf(2, 3); // Find value 2 from index number 3
// console.log(array_5);
// OUTPUT: 6

// EXAMPLE: 4
// let array_6 =
// ["Shayan", "Shazan", "Rafey", "Ahmed", "Shazan", "Faizan", "Hassan"];
// let array_7 = array_6.indexOf("Shazan", 2); // Find value "Shazan" from index number 2
// console.log(array_7);
// OUTPUT: 4 // "Shazan" is present at index number 4
// let array_8 = array_6.indexOf("Shazan", 1); // Find value "Shazan" from index number 1
// console.log(array_8);
// OUTPUT: 1 // "Shazan" is present at index number 1 when we find from index number 1.


// EXAMPLE: 5
// let array_9 =
// ["Shayan", "Shazan", "Rafey", "Ahmed", "Shazan", "Faizan", "Hassan"];
// let array_10 = array_9.indexOf("Ahmed", -5);
// console.log(array_10);
// OUTPUT: 3 // "Ahmed" is present at index number 3 when we find from - 5 index(which is 2 index in positive).
// let array_11 = array_9.indexOf("Ahmed", -3);
// console.log(array_11);
// OUTPUT: -1 // "Ahmed" is not founded in array because we find from - 3 index(which is 4 index in positive).And after 4 index "Ahmed" is not present.

// EXAMPLE: 7
// let array_12 = [0, 1, 2, 4, 6, 9];
// let array_13 = array_12.indexOf(5);
// console.log(array_13);
// OUTPUT: -1 // Because 5 value is not present in the array.


// EXAMPLE: 8
// let array_0 = ["Haseeb", "Faizan", "Suleman", "Faraz"];
// function quickCheck(value, index) {
//     return array_0.indexOf("Faizan") == 0 ? true : false;
// }                        
// console.log(array_0.indexOf("Faizan") == 0 ? true : false);
// console.log(quickCheck());
// OUTPUT: false // Here we make a function if index number of "Faizan" is equal to 0 print true either false.


// ____________________________________________


// array join() method: 

// const myArr = [1, 2, 3, 4, 5];
// const myn2 = myArr.splice(1, 3);
// console.log(myn2)
// const myn1 = myArr.slice(1, 3);
// console.log(myn1)
// const newArr = myArr.join(" - ");
// console.log(newArr)

// let array = ["Haseeb","Faizan","Suleman"];
// console.log(array.join(""));
// "HaseebFaizanSuleman"


// const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var fromTheEnd = FRUITS.slice(-5, -2);
// console.log(fromTheEnd);



// let programmingLangs = ["JavaScript", "Python", "C#", "Java", "PHP",
// "Node"];
// Slice array wihtout passing any params
// let arr1 = programmingLangs.slice(2, 10);
// console.log(arr1);


// let array = ["Haseeb","Faizan","Suleman","Mubashir","Syed","Ali"];
// array.splice(0);
// console.log(array);


// Objects ------------------------------------------


// const user = {
//     name: "Syed",
//     age: 20,
//     email: "syed@20haseeb",
//     phone: "0300-1234567",
// };

// const syedEhtisham = {
//     name: "Syed",
//     age: 20,
//     email: "syed@20haseeb",
//     phone: "03001234567",
//     bloodGroup: "A+"
// };

// const car = {
//     name: "Civic",
//     model: "2010",
//     CarPrice: 1000000,
//     transportationCost: 20000,
//     taxes: 3000,
//     owner: {
//         name: "Syed",
//         age: 20,
//         email: "syed@20haseeb",
//         phone: "03001234567",
//         bloodGroup: "A+"
//     },
//     sound: function () {
//         console.log("beep beep");
//     },
//     totalCost: function () {
//         console.log(this.CarPrice + this.transportationCost + this.taxes);
//     },
//     colors: ["Black", "Blue", "White"],
//     getPrice: function () {
//         console.log(this.price);  // 1000000
//     }
// }

// const JsUser = {
// name: "Ali",
// "full name": "Syed Ali",
// age: 18,
// location: "Jaipur",
// email: "hitesh@google.com",
// isLoggedIn: false,
// lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// JsUser["full name"]= "Abdul";
// console.log(JsUser["full name"])


// const user = {
//     name : "Abdul",
//     age : 20,
// };

// Object.freeze(user);
// user.name = "Ali";
// console.log(user.name)

// user.greeting = function(){
//     console.log("Hello World");
// };

// user.name = "Haseeb"

// user.greeting();

// let a = "Ali";
// console.log(a)

// Making of a function
// function abc (){
//     console.log("Hello World");
// };
// Calling of a function;
// abc();

// let a = "Ali";
// Functions :

// Traditional Function :
// function addTwoNumbers(x, z) {
//     console.log(x , z)
// }
// addTwoNumbers("z","a");

// const name = prompt("Enter your name");
// const userInput = prompt("Please enter your name:");
// function myName(a) {
//     console.log(`Hello ${a}`)
// };
// myName(userInput);
// console.log(userInput);

// function calculateCartPrice(val1, val2, ...val3){
// console.log(val1)
// console.log(val2)
// console.log(val3)
// };
// calculateCartPrice(10,20,30,40,50,50,70,80);

// function defaultParameters (fName, lName = " Siddiqui"){
//     const fullName = fName + lName;
//     console.log(fullName);
// }
// defaultParameters("haseeb", " Butt");

// CREATING A FUNCTION:

// TRADITIONAL FUNCTION:

// function findAgeAfterTenYears(age,years) {
//     const findMyAge = age + years;
//     console.log(findMyAge);
// };
// // CALLING OF A FUNCTION:
// findAgeAfterTenYears(22,5);
// console.log(findMyAge);


// function addTwoNums(a, b) {
//     const add = a + b; // 3
//     // add = 3
//     return add;
// }
// console.log(add) ; // = 3

// if(results < 4){
//     console.log('Number is less than 4');
// }else{
//     console.log('Number is not less than 4');
// }

// function name (){
//     const a = 3;
//     return a;
// };

//  console.log(name()); // = a = 3
// console.log(a); // 3

// Immediately Invoked Function Expressions (IIFE);
// ()();
// (function (){
//     console.log("Hello");
// })();

// LEXICAL SCOPING;

// function fncOne() {
//     const a = 1;
//     console.log(a);
// function funcTwo() {
//         const b = 2;
//         console.log(a);
//     }
//     funcTwo();
// function fncThree() {
//         const c = 3;
//         console.log(a)
//         console.log(b) // 
//         console.log(c)
//     };
//     fncThree();
// }
// fncOne();


// OBJECT DESTRUCTURING 
// const obj1 = {
//     name : "Ali",
//     age : 25,
//     phone: "05464",
//     city: "karachi",
// };

//  const {name, age, phone, city} = obj1
// const {name, age, phone, city} = obj1;
//  console.log(age);

// let array = ["ali", "Syed", "Ethi"];
// console.log(array[0]);

// const [a,b,z] = array;
// console.log(a);

// ARROW FUNCTION;

// let name =  () => {
//     console.log("helo");
// console.log("world");
// }
// name();

// let a = a => console.log(a); 
// a(1);

// let obj = {
//     name: "Ali",
//     age: 4
// };

// let z = () => {

// };

// let a = () => (console.log("Hello"),console.log("Hi"));
// a();

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// this.name= "Ali";
// console.log(this);


// let age = 40;

// const user = {
//     username : "abs",
//     age : 25,
//     welcomeMessage : function(){
//         console.log(`Hello ${this.username}, your age is ${this.age}`);
//         console.log(this);
//     },
// };
// user.welcomeMessage();
// this.foo = "abx";

// let arrowFnc = () => {
//     const name = "Ali";
//     console.log(this);
// };

// arrowFnc();
// console.log(this);

// function name() {
//     const name = "Ali"
// console.log(this.name);
// };
// name();

// let name = "Ali";

// let fnc = function()
// {
// let a = "Wasi";
// return a
// console.log(a);
// };
// fnc();

// console.log(a);


// if(true){

// }


// 
// let obj = {
//     name: "Ali",
//     age: 25,
//     phone: "444564",
//     address: "UK (United Kigndom)"
// };

// const {name, phone, address , age} = obj;
// console.log(name);
// console.log(phone);
// console.log(address);
// console.log(age);

// let array = [0,1,2,3,4,5];

// const [b,a,c,d,e,f] = array;
// console.log(b,a);

// console.log(obj.name);
// console.log(age);

// let array = [1,2,3,4,5,6];
// console.log(array);

// function testing(...fruits) {
//     return fruits;
// };
// testing("Apple", "Mango", "Peach"); // = array
// let array = testing("Apple", "Mango", "Peach"); 
// let array = [ 'Apple', 'Mango', 'Peach' ]
// let [f1,f2,f3] = array;
// console.log(f1);


// CONTROL FLOW / LOGIC FLOW ;

// What is if statements in JS;
// 2 === 2 = true  
// if(2 === 3){
//     console.log("Hello World");
// }


// const isUserloggedIn = true
// const temperature = "41";
// = for assigning a variable or constant
// == for comparing to statements.
// === for comaparing two statements along with their type.

// if ( temperature === 41 ){
//     console.log("Tempm is equal to 41");
// }else {
//     console.log("Tempm is not equal to 1");
// }

// <, >, <=, >=, ==, !=, ===, !== 



// if (temperature == 41) console.log("Success");


// if, else, else if 
// let temp = 30;
// if (temp == 21) {
//     console.log("Temp is 21");
// } else if (temp == 32) {
//     console.log("Temp is 32");
// } else if (temp == 30) {
//     console.log("Temp is 30");
// } else {
//     console.log("Temp is not 21, 32 or 30");
// };

// let math, eng, urdu; 

let isLoggedIn = false;

// || = OR operator in JS
// && = And operator in JS 
// if ( isLoggedIn || previousShopping ) {
//     console.log("You are eligle for shopping");
// }else{
//     console.log("Error")
// }

// let previousShopping = false;

// if (previousShopping) {
//     console.log("Success")
// } else {
//     console.log("Error")
// }
// let name = "Ali"
// let array = []; // Length of array = 5

// if(array &&  Array.isArray(array) &&  array.length > 0){
//     console.log("This is an array");
// }else{
//     console.log("This is not an array");
// }


// let ali = {
//     name: "Ali",
//     age: 21,
//     isStudent: true,
//     isTeacher: false,
// };
// console.log(Object.keys(ali)); // [ 'name', 'age', 'isStudent', 'isTeacher' ]
// console.log(Object.values(ali)); // ["Ali", 21, true, false]


// if (Object.keys(ali).length > 0) {
//     console.log("Success");
// }


// let objKey = "name";
// let objValue = "Ali";
// let objKey_2 = "Last Name";
// let lastName = "Shah";

// let name = "Syed Ehtishaam";

// let ali = {
// [objKey]: objValue
// };
// console.log(ali);

// Terniary Operator;
// Shorter version of if else statement:

// const iceTeaPrice = 110;

// if (iceTeaPrice <= 100) {
//     console.log("Tea price is normal");
// };
// Condition
// iceTeaPrice <= 100 ? console.log("Tea price is normal") : console.log("Tea price is not normal");

// if (' ') {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// };

// const req = {
//     files: {
//         coverImage: [],
//         avatar: ["Avatar"],
//     }
// };

// if (req.files && Object.keys(req.files).length == 2 && req.files.coverImage.length == 1 && req.files.avatar.length == 1) {
//     console.log("Success")
// } else {
//     console.log("Error")
// }

// console.log("hi")
// for loop: 

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//console.log(`Inner loop value ${j} and inner loop ${i}`);
//console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("Table of " + i);
//     for (let j = 1; 1 <= 10; j++) {
//         console.log(i + '*' + j + ' = ' + i * j);
//                   // 2 * 1 = 2
//     }
// };

// Break & Continue:

// for (let value = 1; value <= 15; value++) {
//     console.log(value);
//     if (value == 11) {
//         console.log("11 is the require number");
//         break;
//     }
// }
// let myArray = ['flash', "batman", "superman"];
// length = 3 
// indexs : 0,1,2 
// 3 < 3 
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }


// While;


// let myArray = ['flash', "batman", "superman"];

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1;
// }


// let array = ["First", "Second", "Third"];
// let i = 3;
// // 3 < 3 = true 
// while (i > array.length) {
//     console.log(array[i])
//     i++
// };


// Do while loop:

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// let score = 15

// do {
//     console.log(score);
//     score++
// } while (score <= 11);


// const arr = [0, 1, 2, 3, 4, 5];

// for (const ali of arr) {
//     console.log(ali);
// };

// let name = "Syed Ehtisham Rizvi";
// for (const haseeb of name) {
//     console.log(haseeb)
// }

// let obj= {
//     name: "Ali",
//     age: 21,
//     phone: "0000",
// };

// for(const [key, value] of obj){
//     console.log(key, value);
// }


// For in loop :
// const obj = {
//     name : "Ali",
//     age: 21,
//     phone : "000",
// };

// for(const ethi in obj){
//    console.log(ethi, obj[ethi]);
// } 

// let array = [1,2,3,4,5,6];

// for(const i in array){
//     console.log(array[i])
// }

// let array = [1,2,3,4,5,6,7,8];
// array.forEach( (ali) => console.log(ali) );

let users = [
    {
        name: "Ali",
        age: 22,
        City: "K"
    },
    {
        name: "Syed",
        age: 22,
        City: "P"
    },
    {
        name: "Ethi",
        age: 22,
        City: "C"
    },
    {
        name: "Rizvi",
        age: 22,
        City: "D"
    },
];




























































































































