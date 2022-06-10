let numList = [0];

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
    let number = displayList.join('');
    console.log(number);
    let displayOne = document.querySelector('h2');
    displayOne.innerText = number;
    if(displayList.length > 9) {
        display.innerText = number.substring(0, 9);
    }
}

updateDisplay([0]);

let displayOne = document.querySelector('h5');
console.log(displayOne.innerText);
let calc = document.querySelector('.calculator');
calc.addEventListener('click', function(e) {

    let digit = e.target.id;
    console.log(digit);
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(digit)) {
        numList.push(digit);
        updateDisplay(numList);
    } else if (digit === 'add') {
        alert('hello');
    }

})

// console.log(operate(['/',10,2]));



