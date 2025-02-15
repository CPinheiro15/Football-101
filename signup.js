document
  .getElementById("signup-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! Redirecting to login...");
        window.location.href = "login.html";
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Error signing up. Please try again.");
    }
  });

document
  .getElementById("signup-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html"; // Redirect to login page
    } else {
      alert(`Error: ${data.message}`);
    }
  });
