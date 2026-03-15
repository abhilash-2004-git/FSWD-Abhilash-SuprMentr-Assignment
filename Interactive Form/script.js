const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function showError(input, message) {
    const errorSpan = input.parentElement.querySelector(".error-message");
    errorSpan.textContent = message;
    errorSpan.classList.add("show");
    input.classList.add("error");
}

function clearError(input) {
    const errorSpan = input.parentElement.querySelector(".error-message");
    errorSpan.textContent = "";
    errorSpan.classList.remove("show");
    input.classList.remove("error");
}

function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = "message " + (type === "success" ? "success-message" : "error-message-box");
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    clearError(name);
    clearError(email);
    clearError(password);

    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        showError(email, "Invalid email format");
        isValid = false;
    }

    if (!validatePassword(password.value)) {
        showError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    if (isValid) {
        showMessage("Registration successful!", "success");
        form.reset();
    } else {
        showMessage("Please fix the errors above.", "error");
    }
});