let numList = [0];
numTwo = 0;
numOne = 0;

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


function updateDisplay(displayList) {
    let number = (displayList.join('')).substring(0,9);

    let displayOne = document.querySelector('h2');
    if(number.length < 9) {
        displayOne.innerText = parseInt(number);
        return number
    }
    return number
}

updateDisplay([0]);

let displayOne = document.querySelector('h5');
let displayTwo = document.querySelector('h2');
console.log(displayTwo.innerText);
let calc = document.querySelector('.calculator');
calc.addEventListener('click', function(e) {

    let digit = e.target.id;

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(digit)) {
        numList.push(digit);
        numTwo = updateDisplay(numList);
        console.log(numTwo);
    } else if (digit === 'add') {
        displayOne.innerText = parseInt(numTwo);
    }

})

// console.log(operate(['/',10,2]));



