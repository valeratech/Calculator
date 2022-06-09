const add = function(num1, num2) {
    return (num1 + num2);
};

const subtract = function(num1, num2) {
    return (num1 - num2)
};

const sum = function(numList) {
    return numList.reduce((a, b) => a + b, 0);
};

const multiply = function(numList) {
    return numList.reduce((a, b) => a * b, 1)
};

const power = function(num1, num2) {
    let calc = num1
    let acc = num2 - 1;
    if (num2 === 0) {
        return 1;
    }
    else {
        for (let g = 0; g < acc; g++) {
            calc = calc * num1;
        }
        return calc;
    }
};

const factorial = function(num) {
    let calc = 1
    let acc = num + 1
    for (let n = 2; n < acc; n++) {
        console.log(calc);
        calc = calc * n;
    }
    return calc
}