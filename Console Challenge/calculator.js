function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function modulo(a, b) {
    if (b === 0) {
        return "Error: Modulo by zero";
    }
    return a % b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return modulo(a, b);
        case '^':
            return power(a, b);
        default:
            return "Error: Invalid operator";
    }
}