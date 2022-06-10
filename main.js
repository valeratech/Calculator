function add(num1, num2) {
    return (num1 + num2);
};

function substract(num1, num2) {
    return (num1 - num2);
};

function multiply(num1, num2) {
    return (num1 * num2);
};

function divide(num1, num2) {
    return (num1 / num2);
};

function operate(data) {
    operator = data[0]
    numberOne = data[1]
    numberTwo = data[2]
    if (operator === '+') {
        return add(numberOne, numberTwo);
    } else if (operator === '-') {
        return substract(numberOne, numberTwo);
    } else if (operator === '*') {
        return multiply(numberOne, numberTwo);
    } else if (operator === '/') {
        return divide(numberOne, numberTwo);
    }
}


let numList = []
let displayOne = document.querySelector('h5');
console.log(displayOne.innerText);
let calc = document.querySelector('.calculator');
calc.addEventListener('click', function(e) {

    let digit = e.target.innerText;
    numList.push(digit);
    let display = document.querySelector('.display');

});

// console.log(operate(['/',10,2]));



