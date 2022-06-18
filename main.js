let numList = [0];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let Operator = 'default';
let currentOperator = 'default';
let hiddenOperator = 'default';
let count = 0;
let number = 0;
let displayOne = document.querySelector('.first');
let displaySign = document.querySelector('.operator');
let displayCurrent = document.querySelector('.current');
let displayHidden = document.querySelector('.hidden');
let displayTwo = document.querySelector('.second');
let displayMain = document.querySelector('h2');
let displayEquals = document.querySelector('.equal');
let value = 0;

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
        count++
        if (displaySign.innerText === '+') {
            currentOperator = 'add';
        } else if (displaySign.innerText === '-') {
            currentOperator = 'subtract';
        } else if (displaySign.innerText === '*') {
            currentOperator = 'multiply';
        } else if (displaySign.innerText === '/') {
            currentOperator = 'divide';
        }
        currentOperator = Operator;
    } else if (displayEquals.innerText === '=') {
        
        displayHidden.innerText = currentOperator;
        console.log(`value1: ${displayOne.innerText}`);
        console.log(`value2: ${displayMain.innerText}`);
        console.log(`ecurOperator: ${Operator}`);
        console.log(`ecurrentOperator: ${currentOperator}`)
        displayTwo.innerText = '';
        displayEquals.innerText = '';
        displayOne.innerText = displayMain.innerText;
    } else if (!(displayEquals.innerText === '=')) {
        // currentOperator = Operator;
        displayHidden.innerText = currentOperator;
        console.log(`value1: ${displayOne.innerText}`);
        console.log(`value2: ${displayMain.innerText}`);
        console.log(`ncurOperator: ${Operator}`);
        console.log(`ncurrentOperator: ${currentOperator}`)
        value = operate([Operator, displayOne.innerText, displayMain.innerText]);


        displayMain.innerText = value;
        displayOne.innerText = displayMain.innerText;
    } else {
        currentOperator = Operator;
        console.log(`value1: ${displayOne.innerText}`);
        console.log(`value2: ${displayMain.innerText}`);
        console.log(`ecurOperator: ${Operator}`);
        console.log(`ecurrentOperator: ${currentOperator}`)

        value = operate([Operator, displayOne.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayOne.innerText = displayMain.innerText;
    }
}

function pressButton(e) {

    let digit = e.target.id;

    if (digits.includes(digit)) {
        numList.push(digit);
        number = updateDisplay(numList);

    } else if (digit === 'add') {

        displaySign.innerText = '+';
        Operator = 'add'
        numList = [];
        test();

    } else if (digit === 'subtract') {

        displaySign.innerText = '-';
        displayHidden.innerText = Operator;
        Operator = 'subtract'
        numList = [];
        test();

    } else if (digit === 'multiply') {

        displaySign.innerText = 'x';
        Operator = 'multiply'
        numList = [];
        test();

    } else if (digit === 'divide') {

        displaySign.innerText = '/';
        displayHidden.innerText = Operator;
        Operator = 'divide'
        numList = [];
        test();

    } else if (digit === 'equals') {
        console.log(`value1: ${displayOne.innerText}`);
        console.log(`value2: ${displayMain.innerText}`);
        console.log(`ecurrentOperator: ${currentOperator}`);
        displayTwo.innerText = displayMain.innerText;
        displayEquals.innerText = '='

        let value = operate([currentOperator, displayOne.innerText, displayMain.innerText]);
        displayMain.innerText = value;
    } else if (digit === 'clear') {

        hidden = false;
        numList = [];
        displayOne.innerText = '';
        displayMain.innerText = 0;
        displaySign.innerText = ''
        Operator = 'default';

    }
}

let calc = document.querySelector('.calculator');
calc.addEventListener('click', pressButton);







