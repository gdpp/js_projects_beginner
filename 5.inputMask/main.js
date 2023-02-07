const inputCard = document.getElementById('input-card');
const inputDate = document.getElementById('input-date');
const inputCvv = document.getElementById('input-cvv');

const maskNumber = '****-****-****-****';
const maskDate = '**/**';
const maskCvv = '***';

let current = '';
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);

    inputCard.value = cardNumber.join('');
});

inputDate.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);

    inputDate.value = dateNumber.join('');
});

inputCvv.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        return;
    }

    e.preventDefault();
    handleInput(maskCvv, e.key, cvvNumber);

    inputCvv.value = cvvNumber.join('');
});

function handleInput(mask, key, arr) {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    }

    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === '-' || mask[arr.length] === '/') {
            arr.push(mask[arr.length], key);
        } else {
            arr.push(key);
        }
    }
}
