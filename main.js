const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
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
let displayDisplay = document.querySelector('.display');
let displayHistory = document.querySelector('.history');
let displayLast = document.querySelector('.last');
let dispLaySquare = document.querySelector('#square');
let display


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

function square(num1, num2) {
    return (num1 * num1);
}

function inverse(num1, num2) {
    return (1 / num1);
}

function operate(data) {
    Operator = data[0]
    numberOne = parseFloat(data[1]);
    numberTwo = parseFloat(data[2]);
    if (Operator === 'add') {
        return add(numberOne, numberTwo);
    } else if (Operator === 'subtract') {
        return substract(numberOne, numberTwo);
    } else if (Operator === 'multiply') {
        return multiply(numberOne, numberTwo);
    } else if (Operator === 'divide') {
        return divide(numberOne, numberTwo);
    } else if (Operator === 'square') {
        return square(numberOne, numberTwo);
    }
}

function updateDisplay(displayList) {
    let number = displayList.join('').substring(0,10);
    let displayOne = document.querySelector('h2');
    if(number.length < 10) {
        displayOne.innerText = parseFloat(number);
        return parseFloat(number);
    }
    return number
}

updateDisplay([0]);

function test() {
    if (count === 0) {
        if (displaySign.innerText === '(sq)') {
            displayOne.innerText = displayMain.innerText;
            hiddenOperator = currentOperator;
            value = operate([hiddenOperator, displayOne.innerText, displayMain.innerText]);
            displayMain.innerText = value;
            displayOne.innerText = displayMain.innerText;
        }
        displayOne.innerText = displayMain.innerText;
        count++;
        // if (displaySign.innerText === '+') {
        //     currentOperator = 'add';
        // } else if (displaySign.innerText === '-') {
        //     currentOperator = 'subtract';
        // } else if (displaySign.innerText === 'X') {
        //     currentOperator = 'multiply';
        // } else if (displaySign.innerText === '/') {
        //     currentOperator = 'divide';
        // }
        // hiddenOperator = currentOperator;
    } else if (displaySign.innerText === '(sq)') {
        value = operate([hiddenOperator, displayOne.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayOne.innerText = displayMain.innerText;
    } else if (displaySign.innerText === '(sq)') {
        value = operate([hiddenOperator, displayOne.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayOne.innerText = displayMain.innerText;
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

function createHistory() {
    let x = 0
    let newDiv = document.createElement('div');
    let header = document.querySelector('.history-header')
    x++;
    newDiv.className = 'hchild';
    newDiv.innerHTML = displayDisplay.innerHTML;
    let firstChild = displayHistory.firstChild;
    displayHistory.insertBefore(newDiv, header.nextSibling);
}

function pressButton(e) {
    let digit = e.target.id;
    if (digits.includes(digit)) {
        console.log(numList)
        if (digit === '.') {
            if (numList == '') {
                numList.push(0);
                numList.push(digit);
                number = updateDisplay(numList);
            } else {
                numList.push(digit);
                number = updateDisplay(numList)
            }
        } else {
            numList.push(digit);
            number = updateDisplay(numList);
        }
    } else if (digit === 'pos-neg') {
        console.log(numList);
        if (displayMain.innerText > 0) {
            console.log('positive');
            number = -Math.abs(displayMain.innerText);
            displayMain.innerText = number;
        } else if (displayMain.innerText < 0) {
            console.log('negative');
            number = Math.abs(displayMain.innerText);
            displayMain.innerText = number;
        } else {
            number = parseFloat(updateDisplay(numList)) * -1;
        }
    } else if (digit === 'backspace') {
        if (!(displaySign.innerText === '' && displayEquals.innerText === '')) {
            displaySign.innerText = '';
            displayEquals.innerText = '';
            displayOne.innerText = '';
            displayTwo.innerText = '';
            count = 0;
        } else if (displaySign.innerText === '' && displayEquals.innerText === '') {
            if (numList.length != 1) {
                numList.pop();
                number = parseFloat(updateDisplay(numList));
            }
        } else if (numList.length != 1) {
            numList.pop();
            number = parseFloat(updateDisplay(numList));
        } else {
        }
    }
     else if (digit === 'add') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        console.log(displayMain.innerText);
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
                createHistory();
            } else {
                displayOne.innerText = displayMain.innerText;
                displayEquals.innerText = '='
                // inverted operate input (displayMain - first) to correctly divide when equals is repeatedly pressed
                let value = operate([currentOperator, displayMain.innerText, displayTwo.innerText]);
                displayMain.innerText = value;
                createHistory();
            }
        }
    } else if (digit === 'square') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displaySign.innerText = '(sq)';
        currentOperator = 'square'
        numList = [];
        test();
    } else if (digit === 'reciprocal') {
        // if (currentOperator) {
        //     hiddenOperator = currentOperator
        // }
        displaySign.innerText = `1/(${displayMain.innerText})`;
        currentOperator = 'reciprocal'
        numList = [];
        test();
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
    } else if (digit === 'clear-entry') {
        displayMain.innerText = 0;
    }
}

let calc = document.querySelector('.calculator');
calc.addEventListener('click', pressButton);

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    let deleteHistory = document.querySelectorAll('.hchild');
    for(var i = 0; i < deleteHistory.length; i++) {
        displayHistory.removeChild(deleteHistory[i]);
}
})
