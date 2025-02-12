document.addEventListener("DOMContentLoaded", function() {
const steps = ["one", "two", "three"];
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A"){
        points = 4;
    } else if (grade === "B"){
        points = 3;
    }
    return points;
}
// const fruits = ["watermelon", "peach", "apple", "tomato", 'grape'];

// const fruitsHtml = fruits.filter(fruit => fruit.length < 6).map(listTemplate).join("");
// document.querySelector("#mylist").innerHTML = fruitsHtml;
// const myarray =  [12, 34, 21, 54];
// const luckyNumber = 21;
const listTemplate = (item) => `<li>${item}</li>`;


// let index = myarray.indexOf(luckyNumber);
// let luckyNumberHtml = "";
// if (index !== -1){
//     luckyNumberHtml = (`21 is found in the array ${luckyNumber}`, index);
// }else{
//     luckyNumberHtml = ("21 is not found in the array", index);
// }
// const indexHtml = myarray.map(listTemplate).join("");
// document.querySelector("#mylist").innerHTML = luckyNumberHtml;
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);

const gpaListsHtml = grades.map(point => listTemplate(point)).join("");


document.querySelector("#mylist").innerHTML = gpaListsHtml;

const stepsHtml = steps.map(listTemplate).join("");
   
document.querySelector("#mylist").innerHTML = stepsHtml;

});












