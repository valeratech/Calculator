const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let currentOperator = false;
let hiddenOperator = false;
let numList = [0];
let count = 0;
let number = 0;
let value = 0;
let displayFirst = document.querySelector('.first-display');
let displayOperator = document.querySelector('.operator');
let displaySecond = document.querySelector('.second-display');
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

function reciprocal(num1, num2) {
    return (num1 / num2);
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
    } else if (Operator === 'reciprocal') {
        return reciprocal(numberOne, numberTwo);
    }
}

function updateDisplay(displayList) {
    let number = displayList.join('').substring(0,10);
    let displayFirst = document.querySelector('h2');
    if(number.length < 10) {
        displayFirst.innerText = parseFloat(number);
        return parseFloat(number);
    }
    return number
}

updateDisplay([0]);

function testOperator() {
    if (count === 0) {
        if (displayOperator.innerText === '(sq)') {
            displayFirst.innerText = displayMain.innerText;
            hiddenOperator = currentOperator;
            value = operate([hiddenOperator, displayFirst.innerText, displayMain.innerText]);
            displayMain.innerText = value;
            displayFirst.innerText = displayMain.innerText;
            createHistory();
        } else if (displayOperator.innerText === '1/') {
            displayFirst.innerText = 1;
            hiddenOperator = currentOperator;
            displayOperator.innerText = `1/(${displayMain.innerText})`;
            value = operate([hiddenOperator, displayFirst.innerText, displayMain.innerText]);
            displayMain.innerText = value;
            displayFirst.innerText = '';
            createHistory();
        }
        displayFirst.innerText = displayMain.innerText;
        count++;
        // if (displayOperator.innerText === '+') {
        //     currentOperator = 'add';
        // } else if (displayOperator.innerText === '-') {
        //     currentOperator = 'subtract';
        // } else if (displayOperator.innerText === 'X') {
        //     currentOperator = 'multiply';
        // } else if (displayOperator.innerText === '/') {
        //     currentOperator = 'divide';
        // }
        // hiddenOperator = currentOperator;
    } else if (displayOperator.innerText === '(sq)') {
        value = operate([hiddenOperator, displayFirst.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayFirst.innerText = displayMain.innerText;
        createHistory();
    } else if (displayOperator.innerText === '1/') {
        displayFirst.innerText = 1;
        displayOperator.innerText = `1/(${displayMain.innerText})`;
        value = operate([hiddenOperator, displayFirst.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayFirst.innerText = displayMain.innerText;
        createHistory();
    } else if (displayEquals.innerText === '=') {
        displaySecond.innerText = '';
        displayEquals.innerText = '';
        displayFirst.innerText = displayMain.innerText;
    } else if (!(displayEquals.innerText === '=')) {
        value = operate([hiddenOperator, displayFirst.innerText, displayMain.innerText]);
        displayMain.innerText = value;
        displayFirst.innerText = displayMain.innerText;
        createHistory();
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
        if (displayMain.innerText > 0) {
            number = -Math.abs(displayMain.innerText);
            displayMain.innerText = number;
        } else if (displayMain.innerText < 0) {
            number = Math.abs(displayMain.innerText);
            displayMain.innerText = number;
        } else {
            number = parseFloat(updateDisplay(numList)) * -1;
        }
    } else if (digit === 'backspace') {
        if (!(displayOperator.innerText === '' && displayEquals.innerText === '')) {
            displayOperator.innerText = '';
            displayEquals.innerText = '';
            displayFirst.innerText = '';
            displaySecond.innerText = '';
            count = 0;
        } else if (displayOperator.innerText === '' && displayEquals.innerText === '') {
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
        displayOperator.innerText = '+';
        currentOperator = 'add'
        numList = [];
        testOperator();
    } else if (digit === 'subtract') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displayOperator.innerText = '-';
        currentOperator = 'subtract'
        numList = [];
        testOperator();
    } else if (digit === 'multiply') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displayOperator.innerText = 'x';
        currentOperator = 'multiply'
        numList = [];
        testOperator();
    } else if (digit === 'divide') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displayOperator.innerText = '/';
        currentOperator = 'divide'
        numList = [];
        testOperator();
    } else if (digit === 'equals') {
        if (displayOperator.innerText === '') {
            // pass
        } else {
            if (displaySecond.innerText === '') {
                displaySecond.innerText = displayMain.innerText;
                displayEquals.innerText = '='
                let value = operate([currentOperator, displayFirst.innerText, displayMain.innerText]);
                displayMain.innerText = value;
                createHistory();
            } else {
                displayFirst.innerText = displayMain.innerText;
                displayEquals.innerText = '='
                // inverted operate input (displayMain - first) to correctly divide when equals is repeatedly pressed
                let value = operate([currentOperator, displayMain.innerText, displaySecond.innerText]);
                displayMain.innerText = value;
                createHistory();
            }
        }
    } else if (digit === 'square') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displayOperator.innerText = '(sq)';
        currentOperator = 'square';
        numList = [];
        testOperator();
    } else if (digit === 'reciprocal') {
        if (currentOperator) {
            hiddenOperator = currentOperator
        }
        displayOperator.innerText = '1/';
        currentOperator = 'reciprocal';
        numList = [];
        testOperator();
    } else if (digit === 'clear') {
        numList = [];
        displayFirst.innerText = '';
        displaySecond.innerText = '';
        displayMain.innerText = 0;
        displayOperator.innerText = '';
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
