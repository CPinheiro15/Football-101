document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");

    const loginNav = document.getElementById("login-nav");
    const logoutNav = document.getElementById("logout-nav");

    if (token) {
        loginNav.style.display = "none"; // Hide "Login"
        logoutNav.style.display = "inline"; // Show "Logout"
    } else {
        loginNav.style.display = "inline"; // Show "Login"
        logoutNav.style.display = "none"; // Hide "Logout"
    }

    logoutNav.addEventListener("click", function () {
        localStorage.removeItem("token");
        window.location.href = "login.html"; // Redirect to login
    });
});