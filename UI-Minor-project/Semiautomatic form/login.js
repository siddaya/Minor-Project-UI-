const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', () => {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});
