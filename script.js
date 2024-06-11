const btns = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector(".result-display");
const expressionDisplay = document.querySelector(".expression-display");

let resultDisplayArr = [];
// it takes each button input in an array format
let expressionDisplayArr = [];
// hasDecimalPoint is used for the placement of decimalpoint (.) value
// when it is true we can add (.) in expressionDisplayArr ie. expressionDisplay
// after pressing (.) btn hasDecimalPoint becomes false
// when we press math operator like + - / * hasDecimalPoint becomes true again
// again it becomes false when we press (.) button
let hasDecimalPoint = true;

// adds en addEventListener to each button
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("btn-num")) {
      if (e.target.textContent === "0") {
        setExpressionDisplayArr("0");
      } else if (e.target.textContent === "1") {
        setExpressionDisplayArr("1");
      } else if (e.target.textContent === "2") {
        setExpressionDisplayArr("2");
      } else if (e.target.textContent === "3") {
        setExpressionDisplayArr("3");
      } else if (e.target.textContent === "4") {
        setExpressionDisplayArr("4");
      } else if (e.target.textContent === "5") {
        setExpressionDisplayArr("5");
      } else if (e.target.textContent === "6") {
        setExpressionDisplayArr("6");
      } else if (e.target.textContent === "7") {
        setExpressionDisplayArr("7");
      } else if (e.target.textContent === "8") {
        setExpressionDisplayArr("8");
      } else if (e.target.textContent === "9") {
        setExpressionDisplayArr("9");
      } else if (e.target.textContent === ".") {
        // if hasDecimalPoint is true then we can add (.) to expressionDisplayArr and expressionDisplay
        // if it if false we can't
        // after pressing (.) hasDecimalPoint becomes false. it prevent us from typing it TWICE
        if (hasDecimalPoint) {
          setExpressionDisplayArr(".");
          hasDecimalPoint = false;
        }
      }
    }
    // if user presses any btn-operator buttons and expressionDisplayArr has elements i.e. numbers
    // and expressionDisplayArr doesn't contains any math operators in its last index
    // than we can push math operators to expressionDisplayArr array.
    else if (
      e.target.classList.contains("btn-operator") &&
      expressionDisplayArr.length > 0
    ) {
      const lastElement = expressionDisplayArr[expressionDisplayArr.length - 1];
      if (
        lastElement != "+" &&
        lastElement != "-" &&
        lastElement != "/" &&
        lastElement != "*"
      ) {
        hasDecimalPoint = true;
        if (e.target.classList.contains("btn-operator-addition")) {
          setExpressionDisplayArr("+");
        } else if (e.target.classList.contains("btn-operator-subtraction")) {
          setExpressionDisplayArr("-");
        } else if (e.target.classList.contains("btn-operator-division")) {
          setExpressionDisplayArr("/");
        } else if (e.target.classList.contains("btn-operator-multiplication")) {
          setExpressionDisplayArr("*");
        }
      }
    }
    // if user press AC button it makes hasDecimalPoint true
    // empty two displays and expressionDisplayArr array
    else if (e.target.textContent === "AC") {
      hasDecimalPoint = true;
      expressionDisplay.textContent = "";
      resultDisplay.textContent = "";
      expressionDisplayArr = [];
    } else if (e.target.textContent === "=") {
      try {
        let result = eval(expressionDisplayArr.join(""));
        expressionDisplayArr = [];
        setExpressionDisplayArr(result);
      } catch (error) {
        console.log("error is: " + error);
      }
      // let result = eval(expressionDisplayArr.join(""));
      // expressionDisplayArr = [];
      // setExpressionDisplayArr(result);
      expressionDisplay.textContent = "";
    } else if (e.target.textContent === "←") {
      if (expressionDisplayArr.length > 1) {
        expressionDisplayArr.pop();
        expressionDisplay.textContent = expressionDisplayArr.join("");
        setResultDisplay(expressionDisplayArr.join(""));
      } else {
        expressionDisplayArr = [];
        expressionDisplay.textContent = "";
        resultDisplay.textContent = "";
      }
    } else if (e.target.classList.contains("btn-operator-plus-minus")) {
      if (expressionDisplayArr.length == 0) {
        setExpressionDisplayArr("-");
        return;
      }
      if (expressionDisplayArr.length == 1 && expressionDisplayArr[0] == "-") {
        expressionDisplayArr = [];
        expressionDisplay.textContent = "";
        resultDisplay.textContent = "";
      }
    }
  });
});

function setExpressionDisplayArr(value) {
  expressionDisplayArr.push(value);
  expressionDisplay.textContent = expressionDisplayArr.join("");
  let expressionStr = expressionDisplayArr.join("");
  setResultDisplay(expressionStr);
}
// function setExpressionDisplayArr(resultDisplayValue, value) {
//   expressionDisplayArr.push(resultDisplayValue);
//   expressionDisplayArr.push(value);
//   expressionDisplay.textContent = expressionDisplayArr.join(" ");
//   resultDisplayArr = [];
// }

function setResultDisplay(value) {
  console.log(value);
  if (
    value.includes("+") ||
    value.includes("-") ||
    value.includes("*") ||
    value.includes("/")
  ) {
    if (
      value.charAt(value.length - 1) != "+" &&
      value.charAt(value.length - 1) != "-" &&
      value.charAt(value.length - 1) != "*" &&
      value.charAt(value.length - 1) != "/"
    ) {
      // console.log(eval(value));
      try {
        let sum = eval(value);
        resultDisplay.textContent = sum;
      } catch (error) {
        console.log("error is: " + error);
      }
      // resultDisplay.textContent = eval(value);
    }
  }
}
