const userEmail = []

if (0) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, (NaN = Not a number)

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const req = {
//     files: {
//         coverImage: [],
//         avatar: ""
//     }
// }

// req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// function foo(bar) { 
//     bar = bar ?? 55; 
//     console.log(bar); 
// } 
// foo(); // 55 
// foo(22); // 22 


// const foo = { 
//     bar: 0 
// } 

// const valueBar = foo.bar ?? 42; 
// const valueBaz = foo.baz ?? 42; 

// // Value of bar: 0 
// console.log("Value of bar: ", valueBar); 

// // Value of bar: 42 
// console.log("Value of baz: ", valueBaz); 



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")