// 1- Object Literalls ===> Literally to make an Object. Nothing more than this.
// const user = {
//     // Collection Of Properties : 👇🏻
//     username: "Ethishaam",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         // This referes to current Context:
//         console.log(this);
//     }
// };
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // in Node
// Also do console.log(this) in browser.

// What is Constructor Function:
// (Aik hi object literals say multiple instances bnasakain)
// By using a constructor function, you can easily create multiple objects with the same properties and behavior without having to manually set them for each object.
// Examples of Constructor Functions:
// const promiseOne = new Promise();
// const date = new Date();

// function User(username, loginCount, isLoggedIn) {
//     // Variable = Parameter Value
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
//     this.greeting = function () {
//         console.log(`Welcome ${this.username}`);
//     }
// "Return This is implicitily define, It's not necessary to deine it explicitily:"
//     return this
// };

// const userOne = new User("Ethishaam", 12, true)
// const userTwo = User("Code", 11, false)
// console.log(userTwo);
// const userTwo = new User("Code", 11, false)
// console.log(userOne.constructor); 
//console.log(userTwo);




// function User(username, loginCount, isLoggedIn) {
//     // Variable = Parameter Value
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
// // "Return This is implicitily define, It's not necessary to deine it explicitily:"
//      return this
//  };

// const userOne = User("Ethishaam", 12, true)
// const userTwo = User("Haseeb", 11, false) 
// console.log(userOne);
// const userOne = new User("Ethishaam", 12, true)
// const userTwo = new User("Abdul Haseeb", 11, false)
// console.log(userOne);


// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);

//   console.log(auto instanceof Car);
//   // Expected output: true

//   console.log(auto instanceof Object);
//   // Expected output: true


// ----------------------------------------------------------------




