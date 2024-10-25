// Declare an array
// const myArr = [0, 1, 2, 3, 4, 5];


// Declare another array
// const myHeors = ["Ali", "Syed"];

// Create an array using the Array constructor
// const myArr2 = new Array(1, 2, 3, 4);

// let date = new Date();
// const newArray = new Array(1,3,8,9)

// Array methods

// Add elements to the end of the array (not executed)
// myArr.push(6);
// myArr.push(7);

// Remove the last element of the array (not executed)
// myArr.pop();

// Add elements to the beginning of the array (not executed)
// myArr.unshift(9);

// Remove the first element of the array (not executed)
// myArr.shift();

// Check if an element is present in the array (not executed)
// console.log(myArr.includes(9));

// Get the index of the first occurrence of an element in the array (not executed)
// console.log(myArr.indexOf(3));

// Concatenate all elements of the array into a single string (not executed)
// const newArr = myArr.join();

// Log the original array
// console.log("A ", myArr);
// console.log(newArr);

// Create a new array with elements from index 1 to 3 (exclusive) of the original array
// const myn1 = myArr.slice(1, 3);

// Log the new array
// console.log(myn1);

// Log the original array again to show it remains unchanged
// console.log("B ", myArr);

// Modify the original array by removing elements from index 1 to 3 (inclusive) and return the removed elements
// const myn2 = myArr.splice(1, 3);

// Log the modified original array
// console.log("C ", myArr);

// Log the removed elements
// console.log(myn2);

// -------------------------------------

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// // console.log(marvel_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat()
const real_another_array2 = another_array.flat(Infinity)
console.log(real_another_array);



// console.log(Array.isArray("Haseeb"))
// console.log(Array.from("Haseeb"))
// Array.from() ===> To conver something into Array
// console.log(Array.from({name: "Haseeb"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


// -----------------------



// concat 

// EXAMPLE: 1
// let array = [0,1,2,3];
// let array_1 = [4,5,6,7];
// let array_2 = array.concat(array_1);
// let array_2 = array.concat(array_1);
// console.log(array_2);

// ...spread operator:
// EXAMPLE: 2

// ...array_3 = 0,1,2,3 
// ...array_4 = 4,5,6,7
// let array_3 = [0,1,2,3];
// let array_4 = [4,5,6,7];
// let array_5 = [...array_3,...array_4]
// let array_5 = [...array_3,...array_4];
// console.log(array_5);

// let name = "Syed Ehthisam Rizvi"

// let array = ["Abdul Haseeb Siddiqui"];
// console.log(Array.isArray(name));

// let array = [10,20,45,15,18];

// function checkAdultAge (value){
//     return value >= 18;
// }
// console.log(array.some(checkAdultAge));
// OUTPUT: true











