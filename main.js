const input = document.getElementById('num-input');
const backspaseButton = document.getElementById('backspace-button');
backspaseButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = "0";
    } else {
        input.value = input.value.slice(0, -1);
    }
};
enterNumber = (n) => {
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
