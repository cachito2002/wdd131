// const PI = 3.14;
// let area = 0;
// function circleArea(radius) {
//     const area = radius * radius * PI;
//     return area
// }


// area = circleArea(3)
// console.log("Area1", area);

// area = circleArea(4)
// console.log("Area2", area)

// area = circleArea(1)
// console.log("Area3", area)
// const buttonElement = document.getElementById("submitButton");
// function copyInput(event) {
//     // take a look at the event!
//     console.log(event);
//     const inputElement = document.getElementById("inputBox");
//     const outputElement = document.getElementById("output");
//     outputElement.innerHTML = inputElement.value;
//   }
//   const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
// }

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}
// buttonElement.addEventListener("click", copyInput);