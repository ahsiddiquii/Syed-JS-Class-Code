const insert = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
  // console.log(event);
  insert.innerHTML = `
  <table>
  <tr>
  <th> Key </th>
  <th> Key Code </th>
  <th> Code </th>
  </tr>
  <tr>
  <td>${event.key === " " ? "SpaceBar": event.key}</td>
  <td>${event.keyCode}</td>
  <td>${event.code}</td>
  </tr>
  </table>
  `
})


// let a = 40;
// let b = "40";

// Single is equals to assigning a value to a variable or constant:
// Double == : Compare 2 values: Compare only values, Ignore Types
// Triple === : Compare 2 values as well as their types:

// console.log(a = b);
// console.log(a == b);
// console.log(a === b);

