// variables

let number1;
let operator;
let number2;


function operate(operator, number1, number2) {
    return [operator](number1, number2);
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
