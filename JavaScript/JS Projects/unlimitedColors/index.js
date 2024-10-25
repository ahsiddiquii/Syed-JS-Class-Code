let a;
// For generating random color:
const randomColorGenerator =  () => {
    let hexCodeDigits = '0123456789ABCDEF'
    let randomHexColor = '#';

    // For Loop Syntax
    for (let c = 0; c < 6; c++) {
       randomHexColor += hexCodeDigits[Math.floor(Math.random()* 16)]
    }
    return randomHexColor;
};
// For changing background color of HTML Body:
const changeBackground = () => {
    document.body.style.backgroundColor = randomColorGenerator();
}

document.getElementById("start").addEventListener("click", ()=>{
 a = setInterval(changeBackground, 50);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(a);
})

