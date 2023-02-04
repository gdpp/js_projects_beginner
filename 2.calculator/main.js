const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const themeToggler = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('#icon');

let isDarkMode = false;

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear-btn') {
            display.innerText = '';
        } else if (item.id === 'backspace-btn') {
            let string = display.innerText.toString();
            display.innerHTML = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal-btn') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '' && item.id === 'equal-btn') {
            display.innerText = 'Null';
            setTimeout(() => {
                display.innerText = '';
            }, 2000);
        } else {
            display.innerText += item.lastChild.nodeValue;
        }
    };
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('dark');

    for (const btn of buttons) {
        btn.classList.toggle('dark');
    }

    if (isDarkMode) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }

    isDarkMode = !isDarkMode;
});
