const btns = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector(".result-display");
const expressionDisplay = document.querySelector(".expression-display");

let resultDisplayArr = [];
let expressionDisplayArr = [];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
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
        setExpressionDisplayArr(".");
      }
    } else if (
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
    } else if (e.target.textContent === "AC") {
      expressionDisplay.textContent = "";
      resultDisplay.textContent = "";
      expressionDisplayArr = [];
    } else if (e.target.textContent === "=") {
      let result = eval(expressionDisplayArr.join(""));
      expressionDisplayArr = [];
      setExpressionDisplayArr(result);
      expressionDisplay.textContent = "";
    } else if (e.target.textContent === "←") {
      if (expressionDisplayArr.length > 1) {
        expressionDisplayArr.pop();
        expressionDisplay.textContent = expressionDisplayArr.join("");
      } else {
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
      console.log(eval(value));
      resultDisplay.textContent = eval(value);
    }
  }
}
