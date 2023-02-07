const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.btn-refresh');

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = '';

    for (let index = 0; index < maxPaletteBoxes; index++) {
        //Generate random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, '0')}`;

        //Create a new li element
        const color = document.createElement('li');

        color.classList.add('color');
        color.innerHTML = `
            <div class="rect-box" style="background-color: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>
        `;

        // Add click envent to copy the hex color
        color.addEventListener('click', () => copyColor(color, randomHex));

        // Insert into the container parent element
        container.appendChild(color);
    }
};

const copyColor = (el, hexVal) => {
    const colorElement = el.querySelector('.hex-value');
    navigator.clipboard
        .writeText(hexVal)
        .then(() => {
            colorElement.innerText = 'Copied!';
            setTimeout(() => (colorElement.innerText = hexVal), 800);
        })
        .catch(() => alert('Failed to copy the color code!'));
};

generatePalette();

refreshBtn.addEventListener('click', generatePalette);
