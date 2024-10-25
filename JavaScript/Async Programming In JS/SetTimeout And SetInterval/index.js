console.log("Running");

// SET TIME OUT and CLEAR TIME OUT BROWSER's API:

// 1

setTimeout(()=> {console.log("setTimeout Called");},2000)

// 2

// const heading = document.getElementById("h1")

// const changeText = () => {
//     heading.innerText = "Hello, Syed Ehtisham Rizvi!"
// };

// setTimeout(changeText, 2000)

// 3

// const heading = document.getElementById("h1");
// const changeText = () => {
//     heading.innerText = "Hello, Syed Ehtisham Rizvi!"
// };

// let changeMe = setTimeout(changeText, 2000);

// document.getElementById("btn").addEventListener("click", () => {
//     clearTimeout(changeMe);
//     console.log("Set Time Out Cleared");
//     // changeText();
// });


// -----------------------------------------------------------------------------------

// SET INTERVAL BROWSER's API:

let number = 0
let intfunc = null;
let h2 = document.getElementById("h2");
const incrementFnc = () => {
    if (number == 10) {
        console.log("Stopeddddd");
        clearInterval(intfunc);
        intfunc = null;
    } else {
        number++
        h2.innerText = number;
    }
}


// Start Counter:
document.getElementById("btn1").addEventListener("click", () => {
    if (intfunc == null) {
        intfunc = setInterval(incrementFnc, 1000);
    } else {
        console.log("Counter is already running");
    }
});

// End Counter:
document.getElementById("btn2").addEventListener("click", () => {
    if (!intfunc) {
        console.log("Counter is already stopped!");
    } else {
        clearInterval(intfunc);
        intfunc = null
        console.log("Counter is Stopped!");
    }
});

// Reset Counter 

document.getElementById("btn3").addEventListener("click", () => {
    clearInterval(intfunc);
        number = 0;
        h2.innerText = number;
        intfunc = null;
});







