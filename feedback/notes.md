# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes 100% working calculator with lots of different bits of functionality explored.

2.  Practice using Git / Github Flow:

    - Not really, 2 branches and 6 commits. Try and commit when you add bits of functionality this will stop you having to use messages like "working", "inout working"
    - It is a small project so hard to know when to, if you are writing psuedo code try why not add in when to commit?
      - e.g Set up plus functionality && commit, Set up minus functionality && commit etc...

3.  Application of what you are learning

    - In terms of JS 100% I can see a bit of everything we have covered so far. Maybe not classes but everything else.
    - You haven't used SCSS, BEM or Media queries. Keep on practicing them in your projects as we will be using through the rest of the course.

---

## Specification

1. PSEUDOCODE - not sure

   - You may have deleted it, if you didn't it is a good practice to get into. Your code looks like you followed logical steps as you went through.

2. README - done

   - Yes the intro is done, I think it just needs a couple of features.
     - Setup? how do you get it running
     - Did you do cypress tests? How do you run your tests?

3. 15 commits - not done

4. EVAL? - done

   - I am glad you removed it and got a chance to implement the logic behind it

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your code it is logical and I can see you working through the problem.

---

## Overall

A pretty solid calculator in terms of functionality. Good going mate, you have stretched your JS skills. I think you are the point where you would have refactor slightly to add more to it. Which happens all the time. Have the code working will help if you do refactor / add more features to it.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## House keeping

- Finish to readme.md
- change "Box" class to "box"
- I would say use `()=>{}` instead of `function (){}` for you event listeners.
  - This opinionated though so as long as you are consistent and don't mix you are fine to carry on
- forEach instead of for?

## Introduce Pure functions / functions

How can you start to move some of your logic from your eventListeners into functions?
Could this be its own function?

```js
// 15 - 45
if (input.includes("+")) {
  const mathsArr = input.split("+");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("-")) {
  const mathsArr = input.split("-");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) - parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("*")) {
  const mathsArr = input.split("*");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) * parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("/")) {
  const mathsArr = input.split("/");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) / parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("^")) {
  const mathsArr = input.split("^");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) ** parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else {
  input += operationButtons[i].innerText;
  document.querySelector(".input").value = input;
}
```

## Dry

There is a couple of places that you repeat logic / can simplify it

Your code

```js
// 15 - 45
if (input.includes("+")) {
  const mathsArr = input.split("+");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("-")) {
  const mathsArr = input.split("-");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) - parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("*")) {
  const mathsArr = input.split("*");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) * parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("/")) {
  const mathsArr = input.split("/");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) / parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else if (input.includes("^")) {
  const mathsArr = input.split("^");
  const sum = (previousValue, currentValue) => parseFloat(previousValue) ** parseFloat(currentValue);
  input = mathsArr.reduce(sum);
  input += operationButtons[i].innerText;
} else {
  input += operationButtons[i].innerText;
  document.querySelector(".input").value = input;
}
```

Could be

```js
let sum;
let mathsArr;
if (input.includes("+")) {
  mathsArr = input.split("+");
  sum = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue);
} else if (input.includes("-")) {
  mathsArr = input.split("-");
  sum = (previousValue, currentValue) => parseFloat(previousValue) - parseFloat(currentValue);
} else if (input.includes("*")) {
  mathsArr = input.split("*");
  sum = (previousValue, currentValue) => parseFloat(previousValue) * parseFloat(currentValue);
} else if (input.includes("/")) {
  mathsArr = input.split("/");
  sum = (previousValue, currentValue) => parseFloat(previousValue) / parseFloat(currentValue);
} else if (input.includes("^")) {
  mathsArr = input.split("^");
  sum = (previousValue, currentValue) => parseFloat(previousValue) ** parseFloat(currentValue);
} else {
  document.querySelector(".input").value = input;
}
input = mathsArr.reduce(sum);
input += operationButtons[i].innerText;
```

This still could be put into functions, hopefully it just shows if you are doing the same thing in each if , else if you can do it once at the bottom.
