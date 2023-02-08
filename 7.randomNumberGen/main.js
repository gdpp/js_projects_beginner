const choseNumber = document.getElementById('chose-number');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');
const useNegatives = document.getElementById('use-negative');
const useDecimals = document.getElementById('use-decimal');
const btnSubmit = document.getElementById('submit');

useNegatives.addEventListener('click', toggleUseNegatives);
useDecimals.addEventListener('click', toggleUseDecimals);
btnSubmit.addEventListener('click', generateRandomNumber);

function generateRandomNumber(e) {
    e.preventDefault();

    const min = getMinNumber();
    const max = getMaxNumber();
    const useNegative = toggleUseNegatives();
    const useDecimals = toggleUseDecimals();

    let randomNumber;

    if (useNegative && useDecimals) {
        randomNumber = -(Math.random() * (max - min) + min);
        randomNumber = randomNumber.toFixed(2);
    } else if (useNegative) {
        randomNumber = Math.floor(Math.random() * (max - min) + min) * -1;
    } else if (useDecimals) {
        randomNumber = parseFloat(Math.random() * (max - min) + min).toFixed(2);
    } else {
        randomNumber = Math.floor(Math.random() * (max - min) + min);
    }

    choseNumber.textContent = randomNumber;
}

function getMinNumber() {
    return minValue.value;
}

function getMaxNumber() {
    return maxValue.value;
}

function toggleUseNegatives() {
    return useNegatives.checked;
}

function toggleUseDecimals() {
    return useDecimals.checked;
}
