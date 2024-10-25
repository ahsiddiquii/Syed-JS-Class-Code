
const credentials = localStorage.getItem("user");
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!credentials && !isLoggedIn) {
    window.location.href = "../Signup Page/index.html";
} else if (!isLoggedIn) {
    window.location.href = "../Login Page/index.html"
};

if (credentials) {
    const userObj = JSON.parse(credentials);
    document.getElementById("welcomeHeading").innerHTML =  `Welcome, ${userObj.name} to Our Website.`
}

const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "../Login Page/index.html"
}