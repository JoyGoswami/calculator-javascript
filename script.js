const btns = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector(".result-display");
const expressionDisplay = document.querySelector(".expression-display");

let resultDisplayArr = [];
let expressionDisplayArr = [];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-num")) {
      if (e.target.textContent === "0") {
        setResultDisplayArr("0");
      } else if (e.target.textContent === "1") {
        setResultDisplayArr("1");
      } else if (e.target.textContent === "2") {
        setResultDisplayArr("2");
      } else if (e.target.textContent === "3") {
        setResultDisplayArr("3");
      } else if (e.target.textContent === "4") {
        setResultDisplayArr("4");
      } else if (e.target.textContent === "5") {
        setResultDisplayArr("5");
      } else if (e.target.textContent === "6") {
        setResultDisplayArr("6");
      } else if (e.target.textContent === "7") {
        setResultDisplayArr("7");
      } else if (e.target.textContent === "8") {
        setResultDisplayArr("8");
      } else if (e.target.textContent === "9") {
        setResultDisplayArr("9");
      } else if (e.target.textContent === ".") {
        setResultDisplayArr(".");
      }
    } else if (e.target.classList.contains("btn-operator")) {
      if (resultDisplayArr.length > 0) {
        if (e.target.classList.contains("btn-operator-addition")) {
          let resultDisplayValue = resultDisplayArr.join("");
          setExpressionDisplayArr(resultDisplayValue, "+");
        }
      }
    }
  });
});

function setResultDisplayArr(value) {
  resultDisplayArr.push(value);
  resultDisplay.textContent = resultDisplayArr.join("");
}
function setExpressionDisplayArr(resultDisplayValue, value) {
  expressionDisplayArr.push(resultDisplayValue);
  expressionDisplayArr.push(value);
  expressionDisplay.textContent = expressionDisplayArr.join(" ");
  resultDisplayArr = [];
}
