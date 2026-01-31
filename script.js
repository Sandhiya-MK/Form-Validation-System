function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;
    if (name === "") {
        showError("nameError", "Name is required");
        valid = false;
    } else {
        hideError("nameError");
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        showError("emailError", "Enter a valid email");
        valid = false;
    } else {
        hideError("emailError");
    }

  
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters");
        valid = false;
    } else {
        hideError("passwordError");
    }

    if (password !== confirmPassword) {
        showError("confirmError", "Passwords do not match");
        valid = false;
    } else {
        hideError("confirmError");
    }

    return valid;
}

function showError(id, message) {
    let element = document.getElementById(id);
    element.innerText = message;
    element.style.visibility = "visible";
}

function hideError(id) {
    document.getElementById(id).style.visibility = "hidden";
}
