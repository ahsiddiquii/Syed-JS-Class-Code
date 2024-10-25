// CREATION OF A PROMISE:

// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//         console.log("Task Done");
//         resolve();
//     }, 2000)

// });

// promiseOne.then(() => { console.log("Then Block Run"); }).catch(() => { console.log("Catch Block Run"); });


// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = false;
//         if (a) {
//             resolve("Success")
//         } else {
//             reject("Error")
//         }
//     }, 1000)
// });

// // CONSUMPTION OF A PROMISE:
// promiseTwo
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.log(error)
//     });


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let condition = true;
//         if (!condition) {
//             resolve("Success")
//         } else {
//             reject("Error")
//         }
//     }, 2000)
// }).then((message) => {
//     console.log(message);
// })
//     .catch((error) => { console.log(error); });


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (error) {
//             resolve({ username: "javascript", password: "123" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 2000)
// });

// Error Handling ( try Catch )

// let consumePromiseFive = async () => {

//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// };
// consumePromiseFive();


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// fetch(); // Return Promise

// const getData = async () => {
// try {
//     const response = await fetch('https://api.github.com/users/ehti0110');
//     const data = await response.json();
//     console.log(data);
// } catch (error) {
//     console.log("ERROR", error);
// }
// };

// getData();

// fetch('https://api.github.com/users/ehti0110')
//     .then((response) => {
//         return response.json()
//     })
//     .then((a) => {
//         console.log(a);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// TO-DO: 




