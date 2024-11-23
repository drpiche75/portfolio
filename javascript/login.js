
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.emailfield.value;
    const password = loginForm.pswfield.value;

    if (username === "user" && password === "web") {
        window.location.href="../website/html/index.html"
    } else {
        alert("Login failed!")
    }
})