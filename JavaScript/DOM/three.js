
// In first step we have created a HTML div element.
const div = document.createElement('div');
// console.log(div);

// In the second step, we added some properties to our div element.
div.className = "main"


// In the third step, we added some content to our div element.
// div.id = Math.round(Math.random() * 10 + 1);

let id = Math.round(Math.random() * 10 + 1)


// In the fourth step, we added some styles to our div element.
div.setAttribute("title", "generated title");
div.setAttribute("class", "main second-class");
div.setAttribute("id", id);
div.setAttribute("name", "div Element");
console.log(div);
// let att = div.getAttribute("title");
// console.log(att);

// In the fifth step, we added our div element to the body of the HTML document.
div.style.backgroundColor = "green"
div.style.padding = "12px"

// div.innerText = "Syed Ehtisham Rizvi"
const addText = document.createTextNode("Syed Ehtisham");
div.appendChild(addText);

document.body.appendChild(div);