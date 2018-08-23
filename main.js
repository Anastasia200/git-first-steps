const pointButton = document.getElementById('point-button');
const input = document.getElementById('num-input');
const backspaseButton = document.getElementById('backspace-button');

let num = null;
let op = null;
enterNumber = () => {
    if (n == 1 + 1)
        if (num == null) ;
        let num = null;
        op = '+';
        console.log('+');
    return
};
backspaseButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = "0";
    }  input.value = input.value.slice(0, -1);
};

enterNumber = (n) => {
    if (n === '.') {
        for (let i=0; i< input.value.length; i++ ){
            if (input.value[i]==='.') {
                return
            }
        }
        input.value += '.';
        return
    }

    if (input.value === "0") {
        input.value = n;
    } else {
        input.value = input.value + n;
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

// DOM - Document Object Model
// BOM -Browser Object Model
