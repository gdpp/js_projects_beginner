const txtInput = document.querySelector('.inputs').firstElementChild;
const checkBtn = document.querySelector('.btn-check');
const infoText = document.getElementsByClassName('info-text')[0];

let filterInput;

checkBtn.addEventListener('click', () => {
    // 1. Splitting user input.
    // 2. Reversing them.
    // 3. Joining them in a single word.
    let reverseInput = filterInput.split('').reverse().join('');

    infoText.style.display = 'block';

    if (filterInput != reverseInput) {
        return (infoText.innerHTML = `
            <span class="error">No</span>, <span class="value">"${txtInput.value}"</span> isn't a palindrome!
        `);
    }

    infoText.innerHTML = `
        <span class="success">Yes</span>, <span class="value">"${txtInput.value}"</span> is a palindrome!
    `;
});

txtInput.addEventListener('keyup', () => {
    // Removing spaces & all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, '');

    if (filterInput) {
        return checkBtn.classList.add('active');
    }

    infoText.style.display = 'none';
    checkBtn.classList.remove('active');
});
