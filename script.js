// variables

let number1;
let operator;
let number2;

// event listener for button clicks
let lastClick;
let lastInputNumber = "";
let secondLastInputNumber;
let lastOperator;
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".calculator-screen")
  
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        lastClick = button.id;
        if(isNumeric(lastClick)) {
            lastInputNumber += lastClick;
            screen.innerHTML=lastInputNumber;
        } else if(lastClick === "="){
            lastInputNumber = Number(lastInputNumber);
            lastInputNumber = operate(lastOperator, 
                secondLastInputNumber, 
                lastInputNumber);
            screen.innerHTML = lastInputNumber;
        } else if(lastClick === "C"){
            lastInputNumber = "";
            lastOperator = "";
            secondLastInputNumber = "";
            screen.innerHTML="_" 
        } else {
            lastOperator = lastClick;
            secondLastInputNumber = Number(lastInputNumber);
            lastInputNumber = "";
        }
    });
});


// function to check if number
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
           !isNaN(parseFloat(str))
}

// operator to feed button clicks to calculation operation functions
function operate(operator, number1, number2) {
    // object that maps operator names to functions 
    const operators = {
        add,
        subtract,
        multiply,
        divide
    };
    return operators[operator](number1, number2);
}

// calculator operation functions

function add(addendOne, addendTwo) {
    return addendOne + addendTwo;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(factorOne, factorTwo) {
    return factorOne * factorTwo;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}
