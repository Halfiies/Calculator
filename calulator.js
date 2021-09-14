// accept an input
//text field + input buttons
// if answer box is empty, copy input to answer on operator click 
// const answerBox = " ";
//answerBox = document.getElementsByClassName("answer").value;

//function boxUpdate() {
//  console.log(answerBox)};

//if answer box is full, perform operation
//const equals = document.getElementsByClassName("equals");

//equals.addEventListener("click", test())
console.log("its working")

//check for numbers or symbols
// on click read inner html
// on number click, place number into input box
//document.querySelectorAll("number").addEventlistener("click", updateNumber);
//function updateNumber() => {}

// 

//perform basic maths
//return answer

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const deleteButton = document.querySelector(".delete")
const clearButton = document.querySelector(".clear")
const output= document.querySelector(".output")
let input= ""
const storedInput = document.querySelector(".storedInput")
for (let i=0; i< numberButtons.length;i++){
  numberButtons[i].addEventListener("click", function () {
    input += numberButtons[i].innerText;
    console.log(input);
    document.querySelector(".input").value = input;
  });
};
for (let i=0; i<operationButtons.length; i++){
  operationButtons[i].addEventListener("click", function () {
    console.log("this is an operator button");
  });
};
document.querySelector(".input").innerText = input