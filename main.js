const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let currentOperator = false;
let hiddenOperator = false;
let numList = [0];
let count = 0;
let number = 0;
let value = 0;
let displayOne = document.querySelector('.first');
let displaySign = document.querySelector('.operator');
let displayTwo = document.querySelector('.second');
let displayMain = document.querySelector('h2');
let displayEquals = document.querySelector('.equal');


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
    if (num2 === 0) {
        return 'Dividing by zero is nonsense'
    }
    return (num1 / num2);
};

function operate(data) {
    Operator = data[0]
    numberOne = parseInt(data[1]);
    numberTwo = parseInt(data[2]);
    if (Operator === 'add') {
        return add(numberOne, numberTwo);
    } else if (Operator === 'subtract') {
        return substract(numberOne, numberTwo);
    } else if (Operator === 'multiply') {
        return multiply(numberOne, numberTwo);
    } else if (Operator === 'divide') {
        return divide(numberOne, numberTwo);
    }
}

function updateDisplay(displayList) {
    let number = (displayList.join('')).substring(0,9);
    let displayOne = document.querySelector('h2');
    if(number.length < 10) {
        displayOne.innerText = parseInt(number);
        return number
    }
    return number
}

updateDisplay([0]);

function test() {
    if (count === 0) {
        displayOne.innerText = displayMain.innerText;
        count++;
        if (displaySign.innerText === '+') {
            currentOperator = 'add';
        } else if (displaySign.innerText === '-') {
            currentOperator = 'subtract';
        } else if (displaySign.innerText === '*') {
            currentOperator = 'multiply';
        } else if (displaySign.innerText === '/') {
            currentOperator = 'divide';
        }
        hiddenOperator = currentOperator;
    } else if (displayEquals.innerText === '=') {
        displayTwo.innerText = '';
        displayEquals.innerText = '';
        displayOne.innerText = displayMain.innerText;
    } else if (!(displayEquals.innerText === '=')) {
        value = operate([hiddenOperator, displayOne.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayOne.innerText = displayMain.innerText;
    }
}

function pressButton(e) {
    let digit = e.target.id;
    if (digits.includes(digit)) {
        numList.push(digit);
        number = updateDisplay(numList);
    } else if (digit === 'backspace') {

        if (!(displaySign.innerText === '' && displayEquals.innerText === '')) {
            console.log("full list");
            displaySign.innerText = '';
            displayEquals.innerText = '';
            displayOne.innerText = '';
            displayTwo.innerText = '';
            count = 0;
        } else if (displaySign.innerText === '' && displayEquals.innerText === '') {
            //pass
        } else if (numList.length != 1) {
            numList.pop();
            number = updateDisplay(numList);
        } else {
        }
    }
     else if (digit === 'add') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displaySign.innerText = '+';
        currentOperator = 'add'
        numList = [];
        test();
    } else if (digit === 'subtract') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displaySign.innerText = '-';
        currentOperator = 'subtract'
        numList = [];
        test();
    } else if (digit === 'multiply') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displaySign.innerText = 'x';
        currentOperator = 'multiply'
        numList = [];
        test();
    } else if (digit === 'divide') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displaySign.innerText = '/';
        currentOperator = 'divide'
        numList = [];
        test();
    } else if (digit === 'equals') {
        if (displaySign.innerText === '') {
            // pass
        } else {
            if (displayTwo.innerText === '') {
                displayTwo.innerText = displayMain.innerText;
                displayEquals.innerText = '='
                let value = operate([currentOperator, displayOne.innerText, displayMain.innerText]);
                displayMain.innerText = value;
            } else {
                displayOne.innerText = displayMain.innerText;
                displayEquals.innerText = '='
                // inverted operate input (displayMain - first) to correctly divide when equals is repeatedly pressed
                let value = operate([currentOperator, displayMain.innerText, displayTwo.innerText]);
                displayMain.innerText = value;
            }
        }
    } else if (digit === 'clear') {
        numList = [];
        displayOne.innerText = '';
        displayTwo.innerText = '';
        displayMain.innerText = 0;
        displaySign.innerText = '';
        displayEquals.innerText = '';
        currentOperator = false;
        hiddenOperator = false;
        numList = [0];
        count = 0;
        number = 0;
        value = 0;
    }
}

let calc = document.querySelector('.calculator');
calc.addEventListener('click', pressButton);