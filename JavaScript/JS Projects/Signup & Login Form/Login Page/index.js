

const credentials = localStorage.getItem("user");
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (credentials && isLoggedIn) {
    window.location.href = "../Home Page/index.html";
}
// else if (credentials) {
//     window.location.href = "../Login Page/index.html"
// }


// For Show Password:
function togglePasswordVisibility() {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// For Login Form Submit:

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit action
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const error = document.getElementById("error");

    // Retrieve the JSON string from localStorage
    const userStr = localStorage.getItem("user");

    // Convert the JSON string back into an object
    const userObj = JSON.parse(userStr);

    if ((email.value.trim() !== userObj.email.trim()) || password.value.trim() !== userObj.password.trim()) {
        error.style.display = "block";
        error.innerHTML = "Entered wrong email or password!"
    }else{
        error.innerHTML = ""
        error.style.display = "none"
        email.value = "";
        password.value = "";
        localStorage.setItem("isLoggedIn", true);

        if (localStorage.getItem("isLoggedIn")) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged In Successfully",
                showConfirmButton: false,
                timer: 1000
              });
              setTimeout(() => {
                  window.location.href = "../Home Page/index.html";

              }, 1500);
        }
    }

});
