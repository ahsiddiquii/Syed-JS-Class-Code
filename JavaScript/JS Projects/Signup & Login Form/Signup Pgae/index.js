
const credentials = localStorage.getItem("user");
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (credentials && isLoggedIn) {
    window.location.href = "../Home Page/index.html";
} else if (credentials) {
    window.location.href = "../Login Page/index.html"
}

// For Show Password...
function togglePasswordVisibility() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
};

// For Registration Form Submit:

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit action:
    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const error = document.getElementById("error");

    if (password.value.trim() !== confirmPassword.value.trim()) {
        error.style.display = "block"
        error.innerHTML = "Password and Confirm Password is not same";
    } else {
        error.innerHTML = ""
        error.style.display = "none"
        const userDetails = {
            username: username.value,
            name: name.value,
            email: email.value,
            password: password.value
        };

        let userDetailsinJSON = JSON.stringify(userDetails);
        localStorage.setItem("user", userDetailsinJSON);

        if (localStorage.getItem("user")) {
            username.value = "";
            name.value = "";
            email.value = "";
            password.value = "";
            confirmPassword.value = "";
            window.location.href = "../Login Page/index.html"
        }
    }
});






