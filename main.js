let numList = [0];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operator = 'default'
numOne = '';
numTwo = 0;
let displayOne = document.querySelector('h5');
let displayTwo = document.querySelector('h2');

function add(num1, num2) {
    displayTwo.innerText = (num1 + num2)
    return (num1 + num2);
};

function substract(num1, num2) {
    displayTwo.innerText = (num1 - num2)
    return (num1 - num2);
};

function multiply(num1, num2) {
    displayTwo.innerText = (num1 * num2)
    return (num1 * num2);
};

function divide(num1, num2) {
    displayTwo.innerText = (num1 / num2)
    return (num1 / num2);
};

function operate(data) {
    operator = data[0]
    numberOne = parseInt(data[1]);
    numberTwo = parseInt(data[2]);
    if (operator === 'add') {
        return add(numberOne, numberTwo);
    } else if (operator === 'subtract') {
        return substract(numberOne, numberTwo);
    } else if (operator === 'multiply') {
        return multiply(numberOne, numberTwo);
    } else if (operator === 'divide') {
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

function pressButton(e) {


    console.log(displayTwo.innerText);
    let digit = e.target.id;

    if (digits.includes(digit)) {
        numList.push(digit);
        numTwo = updateDisplay(numList);
        console.log(numTwo);
    } else if (digit === 'add') {
        operator = 'add'
        displayOne.innerText = parseInt(numTwo);
        numList = [];
    } else if (digit === 'subtract') {
        operator = 'subtract'
        displayOne.innerText = parseInt(numTwo);
        numList = [];
    } else if (digit === 'multiply') {
        operator = 'multiply'
        displayOne.innerText = parseInt(numTwo);
        numList = [];
    } else if (digit === 'divide') {
        operator = 'divide'
        displayOne.innerText = parseInt(numTwo);
        numList = [];
    } else if (digit === 'equals') {
        console.log(`value1: ${displayOne.innerText}`);
        console.log(`value2: ${displayTwo.innerText}`);
        console.log(`operator: ${operator}`);
        console.log(operate([operator, displayOne.innerText, displayTwo.innerText]));
    } else if (digit === 'clear') {
        numList = [];
        displayOne.innerText = ' ';
        displayTwo.innerText = 0;
        operator = 'default'

    }
}


// console.log(operate([displayOne.innerText, displayTwo.innerText, 'add']));

let calc = document.querySelector('.calculator');
calc.addEventListener('click', pressButton);
console.log(operator);


// console.log(operate(['/',10,2]));



