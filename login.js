document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token); // Store token
        localStorage.setItem("userName", data.name); // Store user's name
        alert("Login successful!");
        window.location.href = "quiz.html"; // Redirect to quiz page
    } else {
        alert(`Error: ${data.message}`);
    }
});