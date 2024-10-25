// const HandleClick = () => {
//     console.log("Button Clicked");
// }

// document.getElementById("btn").addEventListener("click", () => {
//     console.log("Button Clicked");
// });



// document.getElementById('owl').onclick = function () {
//     alert("owl clicked");
// };




// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false) // event capturing, evenet bubling... 

document.getElementById("images").addEventListener("click", ()=> {
    console.log("Ul Clicked!");
})

document.getElementById('owl').addEventListener('click', function(e){
    e.stopPropagation();
    console.log("owl clicked");
}, false)

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)


// document.querySelector('#images').addEventListener('click', function (e) {
//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode
//         // removeIt.remove()
//         // console.log(removeIt.parentNode);
//         // removeIt.parentNode.removeChild(removeIt)
//     }


// })


// document.getElementById("images").addEventListener("click", () => {
//     console.log("Click on UL Images");
// }, false);

// function fnc (){
//     console.log("Images Clicked");
// }

// document.getElementById("images").addEventListener("click",fnc, true);

// document.getElementById("owl").addEventListener('click', () => {
//     console.log("Owl Clicked!");
// })

// document.getElementById('google').addEventListener('click',function(haseeb){
//     haseeb.preventDefault();
//     console.log(haseeb);
//     // e.stopPropagation()
//     console.log("google clicked");
// }, false);

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault(); 
    console.log("Form Submited");
});