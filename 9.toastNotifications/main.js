const notifications = document.querySelector('.notifications');
const buttons = document.querySelectorAll('.buttons .btn');

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is a error toast',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is a information toast',
    },
};

for (const btn of buttons) {
    btn.addEventListener('click', () => createNewToast(btn.id));
}

function createNewToast(btnId) {
    // Destructuring toastDetails
    const { icon, text } = toastDetails[btnId];

    // create new li element for the toast.
    const toast = document.createElement('li');
    // added toast classes
    toast.classList = `toast ${btnId}`;
    //Setting the inner Html for the toast.
    toast.innerHTML = `
        <div class="column">
            <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
    `;

    //Append the toast to the notifications ul
    notifications.appendChild(toast);

    // Remove toast in specific duration.
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

function removeToast(toast) {
    toast.classList.add('hide');

    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast

    //Remove hidden toast
    setTimeout(() => toast.remove(), 500); //Remove after 500ms
}
