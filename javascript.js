const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordErrorElement = document.getElementById('password-error');

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);

function checkPasswords() {
    if (passwordInput.value!== confirmPasswordInput.value) {
        passwordErrorElement.style.display = 'block';
    } else {
        passwordErrorElement.style.display = 'none';
    }
}