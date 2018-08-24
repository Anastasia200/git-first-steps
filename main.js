const pointButton = document.getElementById('point-button');
const input = document.getElementById('num-input');
const backspaseButton = document.getElementById('backspace-button');
let p = false;
let num = 0;

backspaseButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = "0";
    }
    input.value = input.value.slice(0, -1);
};

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            input.value = n;
            p = false;
        } else {
            input.value = input.value + n;
        }
    }
};

const numButtons = document.getElementsByClassName('button');

for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons [i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}

const dispatchOperation = (operation) => {
    num = processOperation(operation,  parseFloat(input.value),num);
    console.log(num);
    input.value = num;
    p = true;
};
const processOperation = (operation, argument1, argument2) => {
    console.log(operation, argument1, argument2);
    switch (operation) {
        case '+' :
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '*':
            return argument1 * argument2;
        case '/' :
            return argument1 / argument2;
    }
};
const operationButtons = document.getElementsByClassName('operation-button');
[].forEach.call(operationButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});

// DOM - Document Object Model
// BOM -Browser Object Model
