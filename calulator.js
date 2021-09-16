
const operators = ("+","-","*","/","^")
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const deleteButton = document.querySelector(".delete")
const clearButton = document.querySelector(".clear")
let answer= ""
let input= ""
for (let i=0; i< numberButtons.length;i++){
  numberButtons[i].addEventListener("click", function () {
    input += numberButtons[i].innerText;
    document.querySelector(".input").value = input;
  });
};
for (let i=0; i<operationButtons.length; i++){
  operationButtons[i].addEventListener("click", function () {
    if (input.includes("+")){
      const mathsArr = input.split("+");
      const sum = (previousValue, currentValue) => (parseFloat(previousValue) + parseFloat(currentValue));
      input = mathsArr.reduce(sum);
      input += operationButtons[i].innerText;
    }
    else if (input.includes("-")){
      const mathsArr = input.split("-");
      const sum = (previousValue, currentValue) => (parseFloat(previousValue) - parseFloat(currentValue));
      input = mathsArr.reduce(sum);
      input += operationButtons[i].innerText;
    }
    else if (input.includes("*")){
      const mathsArr = input.split("*");
      const sum = (previousValue, currentValue) => (parseFloat(previousValue) * parseFloat(currentValue));
      input = mathsArr.reduce(sum);
      input += operationButtons[i].innerText;
    }
    else if (input.includes("/")){
      const mathsArr = input.split("/");
      const sum = (previousValue, currentValue) => (parseFloat(previousValue) / parseFloat(currentValue));
      input = mathsArr.reduce(sum);
      input += operationButtons[i].innerText;
    }
    else if (input.includes("^")){
      const mathsArr = input.split("^");
      const sum = (previousValue, currentValue) => (parseFloat(previousValue)**parseFloat(currentValue));
      input = mathsArr.reduce(sum);
      input += operationButtons[i].innerText;
    }
    else {
      input += operationButtons[i].innerText;
      document.querySelector(".input").value = input;
    }
  });
  
equalsButton.addEventListener("click", function(){
  if (input.includes("+")){
    const mathsArr = input.split("+");
    const sum = (previousValue, currentValue) => (parseFloat(previousValue) + parseFloat(currentValue));
    answer = mathsArr.reduce(sum);
    document.querySelector(".answer").value = answer;
    input = "";
    document.querySelector(".input").value = input;
  }
  else if (input.includes("-")){
    const mathsArr = input.split("-");
    const sum = (previousValue, currentValue) => (parseFloat(previousValue) - parseFloat(currentValue));
    answer = mathsArr.reduce(sum);
    document.querySelector(".answer").value = answer;
    input = "";
    document.querySelector(".input").value = input;
  }
  else if (input.includes("*")){
    const mathsArr = input.split("*");
    const sum = (previousValue, currentValue) => (parseFloat(previousValue) * parseFloat(currentValue));
    answer = mathsArr.reduce(sum);
    document.querySelector(".answer").value = answer;
    input = "";
    document.querySelector(".input").value = input;
  }
  else if (input.includes("/")){
    const mathsArr = input.split("/");
    const sum = (previousValue, currentValue) => (parseFloat(previousValue) / parseFloat(currentValue));
    answer = mathsArr.reduce(sum);
    document.querySelector(".answer").value = answer;
    input = "";
    document.querySelector(".input").value = input;
  }
  else if (input.includes("^")){
    const mathsArr = input.split("^");
    const sum = (previousValue, currentValue) => (parseFloat(previousValue)**parseFloat(currentValue));
    answer = mathsArr.reduce(sum);
    document.querySelector(".answer").value = answer;
    input = "";
    document.querySelector(".input").value = input;
   }
  else {
    answer = input
    input = ""
  }
});

};
deleteButton.addEventListener( "click", function () {
 input= input.slice(0,-1);
 document.querySelector(".input").value = input;
 input="";
});

clearButton.addEventListener("click", function(){
  answer = ""
  input = ""
  document.querySelector(".answer").value = "";
  document.querySelector(".input").value = "";
});

