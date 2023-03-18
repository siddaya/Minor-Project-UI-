function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordIcon = document.getElementById("show-password-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPasswordIcon.textContent = "Show";
    }
}
